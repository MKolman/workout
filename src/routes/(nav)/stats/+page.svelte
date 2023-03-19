<script lang="ts">
	import { browser } from '$app/environment';
	import Card, { Content } from '@smui/card';
	import { fillDummyData, getWorkoutLog, type WorkoutLog } from '../../../models/history';
	import { formatSets } from '../../../models/workout';

	let workoutLog = new Promise((resolve) => resolve([])) as Promise<WorkoutLog[]>;
	if (browser) workoutLog = getWorkoutLog();
	if (browser && false) fillDummyData();
	const formatTime = (time: number) => {
		const date = new Date(time);
		return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
	};
</script>

<div class="body">
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
							{#if ex.exercise?.id === 'bodyweight'}
								<span> {ex.difficulty}kg </span>
							{:else}
								<span>{formatSets(ex.sets)} of {ex.difficulty}kg </span>
							{/if}
						</span>
					{/each}
				</Content>
			</Card>
		{/each}
	{/await}
</div>

<style>
	.body {
		display: flex;
		flex-direction: column;
		gap: 1em;
		overflow: auto;
		padding: 1em;
		padding-bottom: 10em;
		line-height: 2em;
	}
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
