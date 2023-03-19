import { browser } from '$app/environment';
import Dexie, { type Table } from 'dexie';
import { Exercise } from './exercise';
import { History, type HistoryDb } from './history';
import { Program, ProgramDb } from './program';
import { WorkoutDb, Workout } from './workout';
import { populateExercises } from 'src/models/exercise';
import { populatePrograms } from 'src/models/program';
import { populateWorkouts } from 'src/models/workout';
import { populateSettings, Setting } from './settings';

export class MySubClassedDexie extends Dexie {
	history!: Table<HistoryDb>;
	exercise!: Table<Exercise>;
	workout!: Table<WorkoutDb>;
	program!: Table<ProgramDb>;
	settings!: Table<Setting>;

	constructor() {
		super('workoutDb');
		this.version(1).stores({
			history:
				'++id, [workoutId+time], [exerciseId+time], [programId+time], time, [exerciseId+difficulty], [exerciseId+programId], [exerciseId+workoutId]',
			exercise: 'id',
			workout: 'id',
			program: 'id',
			settings: 'id',
		});
		this.on('populate', async () => {
			await Promise.all([
				populateExercises(this.exercise),
				populateWorkouts(this.workout),
				populatePrograms(this.program),
				populateSettings(this.settings),
			]);
		});
		this.exercise.mapToClass(Exercise);
		this.workout.mapToClass(WorkoutDb);
		this.program.mapToClass(ProgramDb);
		this.open();
	}
}

export const db = new MySubClassedDexie();

if (browser) {
	Exercise.db = db.exercise;
	Workout.db = db.workout;
	Program.db = db.program;
	Setting.db = db.settings;
	History.db = db.history;
}
