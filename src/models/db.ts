import Dexie, { type Table } from 'dexie';
import type { History } from './history';

export class MySubClassedDexie extends Dexie {
	history!: Table<History>;

	constructor() {
		super('workoutDb');
		this.version(1).stores({
			history:
				'++id, [workout_id+time], [exercise_id+time], [program_id+time], time, [exercise_id+difficulty]',
		});
	}
}

export const db = new MySubClassedDexie();
