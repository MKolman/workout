import { Store as ExStore, type Exercise } from './exercise';

type Set = {
	exercise: Exercise;
	sets: number[];
};

export class Workout {
	id: string;
	name: string;
	work: Set[];
	constructor(name: string, work: Set[]) {
		this.id = name.toLowerCase().replace(' ', '_');
		this.name = name;
		this.work = work;
	}
	setsDisplay(): { sets: string; name: string; icon: string }[] {
		const result = [];
		for (const set of this.work) {
			const tmp = { sets: '', name: set.exercise.name, icon: set.exercise.icon() };
			let cnt = 0;
			let prev = null;
			for (const n of set.sets) {
				if (prev === null) {
					cnt = 1;
					prev = n;
					continue;
				}
				if (prev != n) {
					tmp.sets += `${cnt}x${n}, `;
					cnt = 0;
				}
				prev = n;
				cnt += 1;
			}
			if (prev != null) tmp.sets += `${cnt}x${prev}`;

			result.push(tmp);
		}
		return result;
	}
}

export const Store = new Map<string, Workout>(
	[
		new Workout('5x5 B', [
			{ sets: [5, 5, 5, 5, 5], exercise: ExStore.get('squat') as Exercise },
			{ sets: [5, 5, 5, 5, 5], exercise: ExStore.get('overhead_press') as Exercise },
			{ sets: [5, 5, 5, 5, 5], exercise: ExStore.get('deadlift') as Exercise },
		]),
		new Workout('5x5 A', [
			{ sets: [5, 5, 5, 5, 5], exercise: ExStore.get('squat') as Exercise },
			{ sets: [5, 5, 5, 5, 5], exercise: ExStore.get('bench_press') as Exercise },
			{ sets: [5, 5, 5, 5, 5], exercise: ExStore.get('barbell_row') as Exercise },
		]),
		new Workout('Madcow A', [
			{ sets: [5, 5, 5, 5, 5], exercise: ExStore.get('squat') as Exercise },
			{ sets: [5, 5, 5, 5, 5], exercise: ExStore.get('bench_press') as Exercise },
			{ sets: [5, 5, 5, 5, 5], exercise: ExStore.get('barbell_row') as Exercise },
		]),
		new Workout('Madcow B', [
			{ sets: [5, 5, 5, 5], exercise: ExStore.get('squat') as Exercise },
			{ sets: [5, 5, 5, 5], exercise: ExStore.get('incline_bench') as Exercise },
			{ sets: [5, 5, 5, 5], exercise: ExStore.get('deadlift') as Exercise },
		]),
		new Workout('Madcow C', [
			{ sets: [5, 5, 5, 5, 3, 8], exercise: ExStore.get('squat') as Exercise },
			{ sets: [5, 5, 5, 5, 3, 8], exercise: ExStore.get('bench_press') as Exercise },
			{ sets: [5, 5, 5, 5, 3, 8], exercise: ExStore.get('barbell_row') as Exercise },
		]),
	].map((ex) => [ex.id, ex]),
);
