<script lang="ts">
	import WorkoutCard from './WorkoutCard.svelte';
	import { Store } from '../../../models/workout';
	const workouts = Array.from(Store.values()).sort((a, b) => (a.id < b.id ? -1 : 1));
</script>

{#each workouts as workout}
	<WorkoutCard {workout} href="/lib/workouts/edit/{workout.id}" />
{/each}
