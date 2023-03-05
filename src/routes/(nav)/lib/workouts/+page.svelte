<script lang="ts">
	import WorkoutCard from './WorkoutCard.svelte';
	import { Workout } from '../../../../models/workout';
	import { db as _ } from '../../../../models/db';
	import Fab, { Icon } from '@smui/fab';
	const workouts = Workout.all();
</script>

{#await workouts then workouts}
	{#each workouts as workout}
		<WorkoutCard {workout} href="/edit/workout?id={workout.id}" />
	{/each}
{/await}

<Fab color="primary" style="bottom: 1em; right: 1em; position: absolute;" href="/edit/workout?new">
	<Icon class="material-icons">add</Icon>
</Fab>
