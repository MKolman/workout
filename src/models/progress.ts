import type { Workout } from './workout';

export type Progress = {
	day: number;
	difficulty: Map<string, number>;
};

export const Store = new Map<string, Progress>();

export function getProgress(workout: Workout, programId?: string): Progress {
	// TODO: use programId + workout.id as key
	const progress = Store.get(workout.id) || { day: 0, difficulty: new Map<string, number>() };
	for (const set of workout.work) {
		progress.difficulty.set(set.exercise.id, 10);
	}
	Store.set(workout.id, progress);
	return progress;
}
