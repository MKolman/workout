import type { Table } from 'dexie';
import { Workout } from './workout';

export class ProgramDb {
	id: string;
	name: string;
	workoutIds: string[];
	constructor(id: string, name: string, workoutIds: string[]) {
		this.id = id;
		this.name = name;
		this.workoutIds = workoutIds;
	}
	async load(): Promise<Program> {
		const workouts = await Promise.all(this.workoutIds.map((id) => Workout.get(id)));
		return new Program(this.name, workouts, this.id);
	}
}
export class Program {
	id: string;
	name: string;
	workouts: Workout[];
	static db?: Table<ProgramDb>;
	constructor(name: string, workouts: Workout[], id?: string) {
		this.id = id || name.toLowerCase().replaceAll(' ', '_');
		this.name = name;
		this.workouts = workouts;
	}
	toDb(): ProgramDb {
		return new ProgramDb(
			this.id,
			this.name,
			this.workouts.map((w) => w.id),
		);
	}
	async save(): Promise<void> {
		await Program.db?.put(this.toDb());
	}
	static async get(id: string): Promise<Program> {
		const prog = await Program.db?.get(id);
		if (!prog) return NotLoaded;
		return await prog.load();
	}
	static async all(): Promise<Program[]> {
		const progs = await Program.db?.toArray();
		if (!progs) return [];
		return await Promise.all(progs.map((p) => p.load()));
	}
	static new(): Program {
		return new Program('New Program', [], crypto.randomUUID());
	}
	async delete(): Promise<void> {
		await Program.db?.delete(this.id);
	}
}

export const NotLoaded = new Program('Not Loaded', []);
const Store = [
	{ name: 'Stronglifts 5x5', wo: ['5x5_a', '5x5_b'] },
	{ name: 'Madcow 5x5', wo: ['madcow_a', 'madcow_b', 'madcow_c'] },
];

export async function populatePrograms(): Promise<void> {
	await Program.db?.bulkPut(
		Store.map(({ name, wo }) => new ProgramDb(name.toLowerCase().replaceAll(' ', '_'), name, wo)),
	);
}
