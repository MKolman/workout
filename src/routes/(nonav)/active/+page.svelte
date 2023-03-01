<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '@smui/button';

	import { getProgress } from '../../../models/progress';
	import type { Exercise } from '../../../models/exercise';
	import BackBanner from '../../../components/BackBanner.svelte';
	import { db } from '../../../models/db';
	import { Workout, type Set } from '../../../models/workout';

	const _workout = { name: 'Loading...', work: [] as Set[] };
	const _progress = { day: 0, difficulty: new Map() };
	const programId = $page.url.searchParams.get('program') || undefined;
	const workoutId = $page.url.searchParams.get('workout') || undefined;
	let workout = _workout,
		progress = _progress,
		done: number[][] = [];
	const config = async () => {
		if (!browser) return;
		if (!workoutId) {
			console.error('No workout specified');
			goto('/work');
			return;
		}
		const _workout = await Workout.get(workoutId);
		if (!workout) {
			console.error('Workout not found');
			goto('/work');
			return;
		}
		workout = _workout;
		progress = getProgress(_workout, programId);
		done = _workout.work.map((set) => set.sets.map((_) => 0));
	};
	config();
	const dif = (ex: Exercise) => ex.difficulty(progress?.difficulty.get(ex.id) as number);
	const saveAndExit = () => {
		const time = new Date().getTime();
		for (const [idx, set] of workout.work.entries()) {
			const history = {
				time,
				programId,
				workoutId,
				exerciseId: set.exercise.id,
				difficulty: progress.difficulty.get(set.exercise.id) as number,
				sets: Int16Array.from(done[idx]),
			};
			db.history.add(history);
		}
		goto('/work');
	};
</script>

<BackBanner href="/work" title={workout.name}>
	<Button on:click={saveAndExit}>Finish</Button>
</BackBanner>
{#each workout.work as set, exIdx}
	<h2>
		<span class="long">{set.exercise.name}</span>
		<Button color="secondary" variant="text">{dif(set.exercise)}</Button>
	</h2>
	<div class="row">
		{#each set.sets as reps, repIdx}
			{@const doneReps = done[exIdx][repIdx]}
			<Button
				color={doneReps == 0 ? 'secondary' : 'primary'}
				variant="unelevated"
				on:click={() => (done[exIdx][repIdx] = (doneReps + reps) % (reps + 1))}
				class="btn-round"
			>
				{doneReps == 0 ? reps : doneReps}
			</Button>
		{/each}
		<Button color="secondary" variant="unelevated" class="btn-round">+</Button>
	</div>
{/each}
<h2>
	<span class="long">Bodyweight</span>
	<Button color="primary" variant="text">10kg</Button>
</h2>

<style>
	.row {
		display: flex;
		flex-direction: row;
		gap: 1.5em;
		padding: 0 1rem 1rem 1rem;
		overflow: auto;
	}
	h2 {
		display: flex;
		padding-left: 1rem;
		font-weight: normal;
	}
	.long {
		flex: 1;
	}
</style>
