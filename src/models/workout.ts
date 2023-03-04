import type { IndexableType, Table } from 'dexie';
import { Exercise } from './exercise';

export type Set = {
	exercise: Exercise;
	sets: number[];
};

export function formatSets(sets: number[] | Int16Array): string {
	let result: string[] = [];
	let cnt = 0;
	let prev = null;
	for (const n of sets) {
		if (n == 0) {
			continue;
		}
		if (prev !== n) {
			if (prev !== null) result.push(`${cnt}x${prev}`);
			cnt = 0;
		}
		prev = n;
		cnt += 1;
	}
	if (prev !== null) result.push(`${cnt}x${prev}`);
	if (result.length === 0) return '0x0';
	return result.join(', ');
}

type SetDb = {
	exerciseId: string;
	sets: number[];
};

export class WorkoutDb {
	id: string;
	name: string;
	work: SetDb[];
	constructor(id: string, name: string, work: SetDb[]) {
		this.id = id;
		this.name = name;
		this.work = work;
	}

	async load(): Promise<Workout> {
		const exs = await Exercise.bulkGet(this.work.map((set) => set.exerciseId));
		const work = this.work.map((set, idx) => ({
			exercise: exs[idx],
			sets: set.sets,
		}));
		return new Workout(this.name, work, this.id);
	}
}

export class Workout {
	id: string;
	name: string;
	work: Set[];
	static db?: Table<WorkoutDb>;

	constructor(name: string, work: Set[], id?: string) {
		this.id = id || name.toLowerCase().replace(' ', '_');
		this.name = name;
		this.work = work;
	}
	setsDisplay(): { sets: string; name: string; icon: string }[] {
		const result = [];
		for (const set of this.work) {
			const tmp = {
				sets: formatSets(set.sets),
				name: set.exercise.name,
				icon: set.exercise.icon(),
			};
			result.push(tmp);
		}
		return result;
	}
	toDb(): WorkoutDb {
		return new WorkoutDb(
			this.id,
			this.name,
			this.work.map((set) => ({ exerciseId: set.exercise.id, sets: set.sets })),
		);
	}
	async save(): Promise<IndexableType | undefined> {
		return Workout.db?.put(this.toDb());
	}

	static async get(id: string): Promise<Workout> {
		const wo = await Workout.db?.get(id);
		return (await wo?.load()) || NotLoaded;
	}

	static async all(): Promise<Workout[]> {
		const res = (await Workout.db?.toArray()) || [];
		console.log('allWO', res, Workout.db);
		return await Promise.all(res.map((wo) => wo.load()));
	}
}
export const NotLoaded = new Workout('Loading...', []);
export async function populateWorkouts(): Promise<void> {
	const [squat, bench, row, press, deadlift, incline] = [
		'barbell:back_squat',
		'barbell:bench_press',
		'barbell:row',
		'barbell:standing_overhead_press',
		'barbell:deadlift',
		'barbell:incline_bench_press',
	];
	if (!Workout.db) return;
	await Workout.db.bulkPut(
		[
			{
				name: '5x5 B',
				work: [
					{ sets: [5, 5, 5, 5, 5], exerciseId: squat },
					{ sets: [5, 5, 5, 5, 5], exerciseId: press },
					{ sets: [5, 5, 5, 5, 5], exerciseId: deadlift },
				],
			},
			{
				name: '5x5 A',
				work: [
					{ sets: [5, 5, 5, 5, 5], exerciseId: squat },
					{ sets: [5, 5, 5, 5, 5], exerciseId: bench },
					{ sets: [5, 5, 5, 5, 5], exerciseId: row },
				],
			},
			{
				name: 'Madcow A',
				work: [
					{ sets: [5, 5, 5, 5, 5], exerciseId: squat },
					{ sets: [5, 5, 5, 5, 5], exerciseId: bench },
					{ sets: [5, 5, 5, 5, 5], exerciseId: row },
				],
			},
			{
				name: 'Madcow B',
				work: [
					{ sets: [5, 5, 5, 5], exerciseId: squat },
					{ sets: [5, 5, 5, 5], exerciseId: incline },
					{ sets: [5, 5, 5, 5], exerciseId: deadlift },
				],
			},
			{
				name: 'Madcow C',
				work: [
					{
						sets: [5, 5, 5, 5, 3, 8],
						exerciseId: squat,
					},
					{ sets: [5, 5, 5, 5, 3, 8], exerciseId: bench },
					{ sets: [5, 5, 5, 5, 3, 8], exerciseId: row },
				],
			},
		].map(({ name, work }) => new WorkoutDb(name.toLowerCase().replaceAll(' ', '_'), name, work)),
	);
}
