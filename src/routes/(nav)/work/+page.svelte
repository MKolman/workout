<script lang="ts">
	import { Program, NotLoaded } from 'src/models/program';
	import { ActiveProgram } from 'src/models/settings';
	import { db as _ } from 'src/models/db';
	import WorkoutCard from '../lib/workouts/WorkoutCard.svelte';

	let activeProgram = NotLoaded;
	(async () => {
		let prog = await ActiveProgram.get().catch((err) =>
			console.error('Failed to load active program', err),
		);
		if (!prog) {
			console.error('Active program not found', prog);
			return;
		}
		activeProgram = await Program.get(prog.programId);
	})();
</script>

<div class="col-card-holder">
	<h1>{activeProgram.name}</h1>
	{#each activeProgram.workouts as workout, index}
		<WorkoutCard {workout} href="/active?program={activeProgram.id}&workout={workout.id}" />
	{/each}
</div>

<style>
	div.col-card-holder {
		display: flex;
		flex-direction: column;
		gap: 1em;
		overflow: auto;
		padding: 1em;
		padding-bottom: 10em;
		line-height: 2em;
	}
</style>
