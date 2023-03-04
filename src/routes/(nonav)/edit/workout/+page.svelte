<script lang="ts">
	import ExerciseEdit from './ExerciseEdit.svelte';

	import { goto } from '$app/navigation';
	import Button, { Icon } from '@smui/button';
	import { browser } from '$app/environment';
	import Textfield from '@smui/textfield';

	import BackBanner from 'src/components/BackBanner.svelte';
	import { Workout, NotLoaded } from 'src/models/workout';
	import { Exercise, NotLoaded as ExNotLoaded } from 'src/models/exercise';
	import { db as _ } from 'src/models/db';

	const back = '/lib/workouts';
	let workout = NotLoaded;
	let exercises: Exercise[] = [ExNotLoaded];
	if (browser) {
		Exercise.all().then((exs) => {
			exercises = exs;
		});
		let params = new URL(document.location.href).searchParams;
		Workout.get(params.get('id') || '').then((wo) => {
			if (!wo) {
				console.error('Workout not found');
				goto(back);
				return;
			}
			workout = wo;
		});
	}
	const saveAndExit = () => {
		goto(back);
	};
	const swap = (i: number, j: number) => {
		[workout.work[i], workout.work[j]] = [workout.work[j], workout.work[i]];
	};
	const append = () => {
		workout.work.push({ exercise: ExNotLoaded, sets: [0] });
		workout = workout;
	};
	const remove = (idx: number) => {
		workout.work.splice(idx, 1);
		workout = workout;
	};
</script>

<BackBanner href={back} title={workout.name}>
	<Button on:click={saveAndExit}>Save</Button>
</BackBanner>

<div class="wrapper">
	<Textfield bind:value={workout.name} label="Name" />
	{#each workout.work as set, idx (set)}
		{#if idx != 0}
			<Button variant="outlined" on:click={() => swap(idx, idx - 1)}>
				<Icon class="material-symbols-rounded">swap_vert</Icon>
			</Button>
		{/if}
		<ExerciseEdit {exercises} {set} on:remove={() => remove(idx)} />
	{/each}
	<Button variant="outlined" on:click={append}>
		<Icon class="material-symbols-rounded">add</Icon>
	</Button>
</div>

<style>
	.wrapper {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
