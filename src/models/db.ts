import { browser } from '$app/environment';
import Dexie, { type Table } from 'dexie';
import { Exercise } from './exercise';
import type { History } from './history';
import { Program, ProgramDb } from './program';
import { WorkoutDb, Workout } from './workout';

export class MySubClassedDexie extends Dexie {
	history!: Table<History>;
	exercise!: Table<Exercise>;
	workout!: Table<WorkoutDb>;
	program!: Table<ProgramDb>;

	constructor() {
		super('workoutDb');
		this.version(1).stores({
			history:
				'++id, [workout_id+time], [exercise_id+time], [program_id+time], time, [exercise_id+difficulty]',
			exercise: 'id',
			workout: 'id',
			program: 'id',
		});
		this.exercise.mapToClass(Exercise);
		this.workout.mapToClass(WorkoutDb);
		this.program.mapToClass(ProgramDb);
	}
}

export const db = new MySubClassedDexie();

if (browser) {
	Exercise.db = db.exercise;
	Workout.db = db.workout;
	Program.db = db.program;
}
