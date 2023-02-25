import type { Program } from './program';

export const CurrentProgram = 'stronglifts_5x5';

export type Progress = {
	day: number;
	difficulty: Map<string, number>;
};

export const Store = new Map<string, Progress>();

export function getProgress(program: Program): Progress {
	const storedProgress = Store.get(program.id);
	if (storedProgress) {
		return storedProgress;
	}
	const progress = {
		day: 0,
		difficulty: new Map<string, number>(),
	};
	for (const workout of program.workouts) {
		for (const set of workout.work) {
			progress.difficulty.set(set.exercise.id, 10);
		}
	}
	Store.set(program.id, progress);
	return progress;
}
