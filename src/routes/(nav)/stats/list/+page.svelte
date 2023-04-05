<script lang="ts">
	import { browser } from '$app/environment';
	import Card, { Content } from '@smui/card';
	import { fillDummyData, getWorkoutLog, type WorkoutLog } from 'src/models/history';
	import { formatSets } from 'src/models/workout';

	let workoutLog = [] as WorkoutLog[];
	if (browser) getWorkoutLog().then((data) => (workoutLog = data));
	if (browser && false) fillDummyData();
	const formatTime = (time: number) => {
		const date = new Date(time);
		return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
	};
	const scrollTarget = browser ? location.hash.slice(1) : '';
	const scrollTo = (el: Element) => {
		if (el.id === scrollTarget) {
			el.scrollIntoView();
		}
	};
</script>

<div class="body">
	{#each workoutLog as wo}
		<span use:scrollTo id={wo.time.toString()}>
			<Card
				variant="outlined"
				style={wo.time.toString() == scrollTarget ? 'border-color: var(--mdc-theme-primary)' : ''}
			>
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
		</span>
	{/each}
</div>

<style lang="scss">
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
