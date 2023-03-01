<script lang="ts">
	import { CurrentProgram } from '../../../models/progress';
	import { Program, NotLoaded } from '../../../models/program';
	import WorkoutCard from '../lib/workouts/WorkoutCard.svelte';

	let activeProgram = NotLoaded;
	(async () => {
		activeProgram = await Program.get(CurrentProgram);
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
