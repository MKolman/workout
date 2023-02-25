import type { Program } from './program';
import type { Workout } from './workout';

export type History = {
	id?: number;
	// Unix timestamp
	date: number;
	program_id?: string;
	workout_id: string;
	exercise_id: string;
	difficulty: number;
};
