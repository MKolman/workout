import { Dexie, type Table } from 'dexie';
import { db } from './db';
import { Bodyweight, Exercise } from './exercise';
import { Program } from './program';
import { Workout } from './workout';

export type HistoryDb = {
	id?: number;
	// Unix timestamp
	time: number;
	programId?: string;
	workoutId?: string;
	exerciseId: string;
	difficulty: number;
	sets: Int16Array;
	completed: boolean;
};

export async function save(history: HistoryDb): Promise<void> {
	if (history.id) {
		await db.history.put(history);
	} else {
		await db.history.add(history);
	}
}

export class History {
	static db?: Table<HistoryDb>;

	time: number; // Unix timestamp
	programId?: string;
	workoutId?: string;
	exercise: Exercise;
	difficulty: number;
	completedSets: Int16Array;
	plannedSets: Int16Array;
	constructor(
		time: number,
		programId: string | undefined,
		workoutId: string | undefined,
		exercise: Exercise,
		difficulty: number,
		completedSets: Int16Array,
		plannedSets: Int16Array,
	) {
		this.time = time;
		this.programId = programId;
		this.workoutId = workoutId;
		this.exercise = exercise;
		this.difficulty = difficulty;
		this.plannedSets = plannedSets;
		this.completedSets = completedSets;
	}
	static async getLastDifficulty(
		exerciseId: string,
		workoutId?: string,
		programId?: string,
	): Promise<number> {
		if (!History.db) {
			console.error('History db not loaded');
			return 10;
		}
		if (programId) {
			const history = await History.db
				.where('[exerciseId+programId]')
				.equals([exerciseId, programId])
				.last();
			if (history) {
				return history.difficulty;
			}
		}
		if (workoutId) {
			const history = await History.db
				.where('[exerciseId+workoutId]')
				.equals([exerciseId, workoutId, Dexie.minKey])
				.last();
			if (history) {
				return history.difficulty;
			}
		}
		const history = await History.db
			.where('[exerciseId+workoutId]')
			.between([exerciseId, Dexie.minKey], [exerciseId, Dexie.minKey])
			.last();
		if (history) {
			return history.difficulty;
		}
		console.warn('History log not found');
		return 10;
	}
	static async fromWorkout(workout: Workout, programId?: string): Promise<History[]> {
		const difs = await Promise.all(
			workout.work.map(async (set) =>
				History.getLastDifficulty(set.exercise.id, workout.id, programId),
			),
		);
		const time = new Date().getTime();
		const result = workout.work.map(
			(set, idx) =>
				new History(
					time,
					programId,
					workout.id,
					set.exercise,
					difs[idx],
					Int16Array.from(set.sets.map(() => 0)),
					Int16Array.from(set.sets),
				),
		);
		result.push(
			new History(
				time,
				programId,
				workout.id,
				Bodyweight,
				await History.getLastDifficulty(Bodyweight.id, workout.id, programId),
				new Int16Array(),
				new Int16Array(),
			),
		);
		return result;
	}
	async save(): Promise<void> {
		await save({
			time: this.time,
			programId: this.programId,
			workoutId: this.workoutId,
			exerciseId: this.exercise.id,
			difficulty: this.difficulty,
			sets: this.completedSets,
			completed: this.plannedSets.every((set, idx) => set <= this.completedSets[idx]),
		});
	}
}

export async function fillDummyData() {
	console.log('fillDummyData');
	const history = {
		time: Date.now(),
		exerciseId: 'bodyweight',
		difficulty: 10,
		sets: new Int16Array(),
	} as HistoryDb;
	for (let i = 60; i < 100; i++) {
		history.difficulty = i;
		delete history.id;
		await save(history);
	}
}

export type WorkoutLog = {
	time: number;
	program?: Program;
	workout?: Workout;
	exercises: { exercise: Exercise; sets: Int16Array; difficulty: number }[];
};

export async function getWorkoutLog(): Promise<WorkoutLog[]> {
	const all = await db.history.orderBy('time').desc().toArray();
	if (all.length === 0) {
		return [];
	}
	const grouped: HistoryDb[][] = [[all[0]]];
	const pCache = new Set<string>(),
		wCache = new Set<string>(),
		eCache = new Set<string>();
	for (const history of all.slice(1)) {
		if (history.programId) {
			pCache.add(history.programId);
		}
		if (history.workoutId) {
			wCache.add(history.workoutId);
		}
		eCache.add(history.exerciseId);
		const last = grouped.length - 1;
		if (grouped[last][0].time !== history.time) {
			grouped.push([history]);
			continue;
		}
		if (grouped[last][0].programId !== history.programId) {
			console.warn('programId mismatch', grouped[last][0].programId, history.programId);
		}
		if (grouped[last][0].workoutId !== history.workoutId) {
			console.warn('workoutId mismatch', grouped[last][0].workoutId, history.workoutId);
		}
		grouped[last].push(history);
	}

	const workouts = await Promise.all(
		grouped.map(async (group) => ({
			time: group[0].time,
			program: group[0].programId ? await Program.get(group[0].programId) : undefined,
			workout: group[0].workoutId ? await Workout.get(group[0].workoutId) : undefined,
			exercises: await Promise.all(
				group.map(async (history) => ({
					sets: history.sets,
					exercise: await Exercise.get(history.exerciseId),
					difficulty: history.difficulty,
				})),
			),
		})),
	);

	return workouts;
}
