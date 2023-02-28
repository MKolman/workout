import { db } from './db';
import type { Exercise } from './exercise';
import type { Program } from './program';
import type { Workout } from './workout';
import { Store as PStore } from './program';
import { Store as WStore } from './workout';
import { Store as EStore } from './exercise';

export type History = {
	id?: number;
	// Unix timestamp
	time: number;
	programId?: string;
	workoutId?: string;
	exerciseId: string;
	difficulty: number;
	sets: Int16Array;
};

export async function save(history: History) {
	if (history.id) {
		await db.history.put(history);
	} else {
		await db.history.add(history);
	}
}

export async function fillDummyData() {
	console.log('fillDummyData');
	const history = {
		time: Date.now(),
		exerciseId: 'bodyweight',
		difficulty: 10,
		sets: new Int16Array(),
	} as History;
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
	const all = await db.history.orderBy('time').toArray();
	if (all.length === 0) {
		return [];
	}
	const grouped: History[][] = [[all[0]]];
	const pCache = new Set<string>(),
		wCache = new Set<string>(),
		eCache = new Set<string>();
	for (const history of all) {
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
			console.warn('program_id mismatch', grouped[last][0].programId, history.programId);
		}
		if (grouped[last][0].workoutId !== history.workoutId) {
			console.warn('workout_id mismatch', grouped[last][0].workoutId, history.workoutId);
		}
		grouped[last].push(history);
	}

	const workouts = [];
	for (const group of grouped) {
		workouts.push({
			time: group[0].time,
			program: group[0].programId ? PStore.get(group[0].programId) : undefined,
			workout: group[0].workoutId ? WStore.get(group[0].workoutId) : undefined,
			exercises: group.map((history) => ({
				sets: history.sets,
				exercise: EStore.get(history.exerciseId) as Exercise,
				difficulty: history.difficulty,
			})),
		});
	}
	return workouts;
}
