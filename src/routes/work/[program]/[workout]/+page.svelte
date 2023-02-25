<script lang="ts">
	import { page } from '$app/stores';
	import Button from '@smui/button';
	import { getProgress } from '../../../../models/progress';
	import { type Program, Store } from '../../../../models/program';
	import type { Exercise } from '../../../../models/exercise';

	let active = Store.get($page.params.program) as Program;
	let workout = active.workouts[+$page.params.workout];
	let done = workout.work.map((set) => set.sets.map((_) => 0));
	const progress = getProgress(active);
	const dif = (ex: Exercise) => ex.difficulty(progress.difficulty.get(ex.id) as number);
</script>

<h1><span class="long">{workout.name}</span><Button>Finish workout</Button></h1>
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
			>
				{doneReps == 0 ? reps : doneReps}
			</Button>
		{/each}
		<Button color="secondary" variant="unelevated">+</Button>
	</div>
{/each}

<style>
	.row {
		display: flex;
		flex-direction: row;
		gap: 1em;
		padding: 1rem;
		overflow: auto;
	}
	h1,
	h2 {
		display: flex;
	}
	.long {
		flex: 1;
	}
</style>
