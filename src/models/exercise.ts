import type { Table } from 'dexie';

// This works better than enums for some reason
export const Type = {
	Barbell: 'Barbell',
	Dumbell: 'Dumbell',
	Kettlebell: 'Kettlebell',
	Bodyweight: 'Bodyweight',
	Time: 'Time',
	Machine: 'Machine',
	Velocity: 'Velocity',
} as const;
export type Type = string;

export class TypeUtil {
	static icon(type: Type, fallback?: string): string {
		switch (type) {
			case Type.Barbell:
				return 'fitness_center';
			case Type.Dumbell:
				return 'exercise';
			case Type.Kettlebell:
				return 'weight';
			case Type.Bodyweight:
				return 'directions_run';
			case Type.Time:
				return 'timer';
			case Type.Machine:
				return 'table_rows_narrow';
			case Type.Velocity:
				return 'speed';
			default:
				if (fallback) {
					return fallback;
				}
				throw `icon not defined for Type '${type}'`;
		}
	}
	static formatDifficulty(type: Type, difficulty: number): string {
		switch (type) {
			case Type.Barbell:
			case Type.Dumbell:
			case Type.Kettlebell:
			case Type.Machine:
				return `${difficulty}kg`;
			case Type.Bodyweight:
				return '';
			case Type.Velocity:
				return `${difficulty}km/h`;
			case Type.Time:
				let result = '';
				let hours, minutes, seconds;
				if ((hours = Math.floor(difficulty / 3600))) {
					result += `${hours}h`;
					difficulty %= 3600;
				}
				if ((minutes = Math.floor(difficulty / 60))) {
					result += `${minutes}m`;
					difficulty %= 60;
				}
				if ((seconds = Math.floor(difficulty))) {
					result += `${seconds}s`;
				}
				return result;
			default:
				throw `format not defined for Type ${type}`;
		}
	}
}
export class Exercise {
	id: string;
	name: string;
	shortName: string;
	type: Type;
	static db?: Table<Exercise>;

	constructor(id: string, name: string, shortName: string, type: Type) {
		this.id = id;
		this.name = name;
		this.shortName = shortName;
		this.type = type;
	}

	icon(fallback?: string): string {
		return TypeUtil.icon(this.type, fallback);
	}

	difficulty(difficulty: number): string {
		return TypeUtil.formatDifficulty(this.type, difficulty);
	}

	async save(): Promise<void> {
		await Exercise.db?.put(this);
	}
	static async get(id: string): Promise<Exercise> {
		if (id == 'bodyweight') return Bodyweight;
		return (await Exercise.db?.get(id)) || NotLoaded;
	}
	static async bulkGet(ids: string[]): Promise<Exercise[]> {
		return (
			(await Exercise.db?.bulkGet(ids))?.map((e) => e || NotLoaded) || ids.map(() => NotLoaded)
		);
	}
	static async all(): Promise<Exercise[]> {
		return (await Exercise.db?.toArray()) || [];
	}
	static new(): Exercise {
		return new Exercise(crypto.randomUUID(), 'New exercise', 'New', Type.Barbell);
	}
	async delete(): Promise<void> {
		await Exercise.db?.delete(this.id);
	}
}

export const NotLoaded = new Exercise('not_loaded', 'Loading...', 'Loading...', Type.Barbell);
export const Bodyweight = new Exercise('bodyweight', 'Bodyweight', 'Bodyweight', Type.Kettlebell);

export async function populateExercises(db?: Table<Exercise>): Promise<void> {
	db = db || Exercise.db;
	if (!db) {
		console.error('Database not available');
		return;
	}
	const req = await fetch('/exercises.csv');
	if (!req.ok) {
		console.error('Failed to fetch exercises.csv', req);
		return;
	}
	const data = await req.text();
	const lines = data.split('\n');
	const ex = [];
	for (const line of lines.slice(1)) {
		const [id, name, shortName, type] = line.trimEnd().split(',');
		ex.push(new Exercise(id, name, shortName, type as Type));
	}
	await db.bulkAdd(ex);
}
