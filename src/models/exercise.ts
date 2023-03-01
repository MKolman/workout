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
	static icon(type: Type): string {
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
				throw `icon not defined for Type '${type}' '${Type.Barbell}' ${type == Type.Barbell} ${
					type == 'Barbell'
				} ${type.charCodeAt(type.length - 1)}!= ${Type.Barbell.length}`;
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

	icon(): string {
		return TypeUtil.icon(this.type);
	}

	difficulty(difficulty: number): string {
		return TypeUtil.formatDifficulty(this.type, difficulty);
	}

	async save(): Promise<void> {
		await Exercise.db?.put(this);
	}
	static async get(id: string): Promise<Exercise> {
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
}

const NotLoaded = new Exercise('not_loaded', 'Not Loaded', 'Not Loaded', Type.Barbell);

export async function populateExercises(): Promise<void> {
	if (!Exercise.db) {
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
	await Exercise.db?.bulkAdd(ex);
}
