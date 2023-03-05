<script lang="ts">
	import ExerciseEdit from './ExerciseEdit.svelte';

	import { goto } from '$app/navigation';
	import Button, { Icon } from '@smui/button';
	import { browser } from '$app/environment';
	import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	import Textfield from '@smui/textfield';

	import BackBanner from 'src/components/BackBanner.svelte';
	import { Workout, NotLoaded } from 'src/models/workout';
	import { Exercise, NotLoaded as ExNotLoaded } from 'src/models/exercise';
	import { db as _ } from 'src/models/db';

	const back = '/lib/workouts';
	let workout = NotLoaded;
	let exercises: Exercise[] = [ExNotLoaded];
	let create = true;
	if (browser) {
		Exercise.all().then((exs) => {
			exercises = exs;
		});
		let params = new URL(document.location.href).searchParams;
		if (params.has('new')) {
			workout = Workout.new();
		} else {
			Workout.get(params.get('id') || '').then((wo) => {
				if (!wo) {
					console.error('Workout not found');
					goto(back);
					return;
				}
				workout = wo;
				create = false;
			});
		}
	}
	const saveAndExit = async () => {
		await workout.save();
		goto(back);
	};
	const deleteAndExit = async () => {
		await workout.delete();
		goto(back);
	};
	const swap = (i: number, j: number) => {
		[workout.work[i], workout.work[j]] = [workout.work[j], workout.work[i]];
		changed = true;
	};
	const append = () => {
		workout.work.push({ exercise: exercises?.[0] || ExNotLoaded, sets: [0] });
		workout = workout;
		changed = true;
	};
	const remove = (idx: number) => {
		workout.work.splice(idx, 1);
		workout = workout;
		changed = true;
	};
	const preventBack = (): boolean => {
		if (!changed) return false;
		openBackDialog = true;
		return true;
	};
	let changed = false;
	let openBackDialog = false;
	let openDeleteDialog = false;
</script>

<Dialog
	bind:open={openBackDialog}
	aria-labelledby="default-focus-title"
	aria-describedby="default-focus-content"
>
	<Title id="default-focus-title">Are you sure?</Title>
	<Content id="default-focus-content">
		There are unsaved changes. Are you sure you want to quit?
	</Content>
	<Actions>
		<Button on:click={saveAndExit}>Save</Button>
		<Button on:click={() => goto(back)}>Discard</Button>
		<Button defaultAction use={[InitialFocus]} on:click={() => (openBackDialog = false)}>
			Stay
		</Button>
	</Actions>
</Dialog>
<Dialog
	bind:open={openDeleteDialog}
	aria-labelledby="default-focus-title"
	aria-describedby="default-focus-content"
>
	<Title id="default-focus-title">Delete this workout?</Title>
	<Content id="default-focus-content">
		Are you sure you want to delete this workout? This action is not reversable.
	</Content>
	<Actions>
		<Button on:click={deleteAndExit}>Yes, delete.</Button>
		<Button defaultAction use={[InitialFocus]} on:click={() => (openDeleteDialog = false)}>
			No, keep editing.
		</Button>
	</Actions>
</Dialog>

<BackBanner href={back} title={workout.name} beforeBack={preventBack}>
	<Button on:click={saveAndExit} disabled={!changed}>Save</Button>
</BackBanner>

<div class="wrapper">
	<Textfield bind:value={workout.name} label="Name" />
	{#each workout.work as set, idx (set)}
		{#if idx != 0}
			<Button variant="outlined" on:click={() => swap(idx, idx - 1)}>
				<Icon class="material-symbols-rounded">swap_vert</Icon>
			</Button>
		{/if}
		<ExerciseEdit
			{exercises}
			{set}
			on:remove={() => remove(idx)}
			on:change={() => (changed = true)}
		/>
	{/each}
	<Button variant="outlined" on:click={append}>
		<Icon class="material-symbols-rounded">add</Icon>
	</Button>
	{#if !create}
		<Button
			style="background-color: red; margin-top:1em;"
			variant="raised"
			on:click={() => (openDeleteDialog = true)}
		>
			Delete
		</Button>
	{/if}
</div>

<style>
	.wrapper {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
