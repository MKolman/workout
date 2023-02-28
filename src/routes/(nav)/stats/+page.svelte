<script lang="ts">
	import { browser } from '$app/environment';
	import Card, { Content } from '@smui/card';
	import { fillDummyData, getWorkoutLog, type WorkoutLog } from '../../../models/history';
	import { liveQuery } from 'dexie';
	import { db } from '../../../models/db';

	let workoutLog = new Promise((resolve) => resolve([])) as Promise<WorkoutLog[]>;
	if (browser) workoutLog = getWorkoutLog();
	if (browser && false) fillDummyData();
	const formatTime = (time: number) => {
		const date = new Date(time);
		return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
	};
</script>

<h1>History</h1>
{#await workoutLog then data}
	{#each data as wo}
		<Card variant="outlined">
			<Content>
				<h2>{wo.workout?.name}</h2>
				<span>{formatTime(wo.time)}</span><br />
				{#each wo.exercises as ex}
					<span class="row">
						<span class="name">{ex.exercise?.name}</span>
						<span>{ex.sets} of {ex.difficulty}kg </span>
					</span>
				{/each}
			</Content>
		</Card>
	{/each}
{/await}

<style>
	.row {
		display: flex;
		align-items: center;
		gap: 1em;
	}
	.name {
		white-space: nowrap;
		flex: 1;
	}
</style>
