<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Button from '@smui/button';

	import BackBanner from 'src/components/BackBanner.svelte';
	import { Workout, NotLoaded as WoNotLoaded } from 'src/models/workout';
	import DifficultyPicker from 'src/components/DifficultyPicker.svelte';
	import { History } from 'src/models/history';

	let programId: string | undefined = undefined;
	let workoutId: string | undefined = undefined;
	if (browser) {
		let params = new URL(document.location.href).searchParams;
		programId = params.get('program') || undefined;
		workoutId = params.get('workout') || undefined;
	}
	let workout = WoNotLoaded,
		progress: History[] = [];
	const config = async () => {
		if (!browser) return;
		if (!workoutId) {
			console.error('No workout specified');
			goto('/work');
			return;
		}
		const _workout = await Workout.get(workoutId);
		if (!_workout) {
			console.error('Workout not found');
			goto('/work');
			return;
		}
		workout = _workout;
		progress = await History.fromWorkout(workout, programId);
	};
	config();
	const saveAndExit = async () => {
		await Promise.all(progress.map((h) => h.save()));
		goto('/work');
	};
</script>

<BackBanner href="/work" title={workout.name}>
	<Button on:click={saveAndExit}>Finish</Button>
</BackBanner>
{#each progress as set}
	<h2>
		<span class="long">{set.exercise.name}</span>
		<DifficultyPicker bind:value={set.difficulty} type={set.exercise.type} />
	</h2>
	{#if set.exercise.id != 'bodyweight'}
		<div class="row">
			{#each set.completedSets as reps, repIdx}
				{@const planned = set.plannedSets[repIdx]}
				<Button
					color={reps == 0 ? 'secondary' : 'primary'}
					variant="unelevated"
					on:click={() => (set.completedSets[repIdx] = (planned + reps) % (planned + 1))}
					class="btn-round"
				>
					{reps == 0 ? planned : reps}
				</Button>
			{/each}
			<Button color="secondary" variant="unelevated" class="btn-round">+</Button>
		</div>
	{/if}
{/each}

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
