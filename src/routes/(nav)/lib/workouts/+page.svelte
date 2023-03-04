<script lang="ts">
	import WorkoutCard from './WorkoutCard.svelte';
	import { Workout } from '../../../../models/workout';
	import { db as _ } from '../../../../models/db';
	const workouts = Workout.all();
</script>

{#await workouts then workouts}
	{#each workouts as workout}
		<WorkoutCard {workout} href="/edit/workout?id={workout.id}" />
	{/each}
{/await}
