<script lang="ts">
	import { goto } from '$app/navigation';
	import Button, { Icon } from '@smui/button';
	import IconButton from '@smui/icon-button';
	import Dialog, { Title, Content, Actions, InitialFocus, Header } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import { browser } from '$app/environment';

	import BackBanner from 'src/components/BackBanner.svelte';
	import { Program, NotLoaded } from 'src/models/program';
	import { Workout, NotLoaded as WoNotLoaded } from 'src/models/workout';
	import { Exercise, NotLoaded as ExNotLoaded } from 'src/models/exercise';
	import { db as _ } from 'src/models/db';
	import WorkoutCard from 'src/routes/(nav)/lib/workouts/WorkoutCard.svelte';

	const back = '/lib';
	let program = NotLoaded;
	let workouts: Workout[] = [WoNotLoaded];
	let create = true;
	if (browser) {
		Workout.all().then((wo) => {
			workouts = wo;
		});
		let params = new URL(document.location.href).searchParams;
		if (params.has('new')) {
			program = Program.new();
		} else {
			Program.get(params.get('id') || '').then((prog) => {
				if (!prog) {
					console.error('Workout not found');
					goto(back);
					return;
				}
				program = prog;
				create = false;
			});
		}
	}
	const saveAndExit = async () => {
		await program.save();
		goto(back);
	};
	const deleteAndExit = async () => {
		await program.delete();
		goto(back);
	};
	const swap = (i: number, j: number) => {
		[program.workouts[i], program.workouts[j]] = [program.workouts[j], program.workouts[i]];
		changed = true;
	};
	const append = () => {
		program.workouts.push(workouts[0]);
		program = program;
		changed = true;
		changeWorkoutIdx = program.workouts.length - 1;
	};

	const set = (wo: Workout) => {
		program.workouts[changeWorkoutIdx || 0] = wo;
		program = program;
		changed = true;
		changeWorkoutIdx = null;
	};

	const remove = (idx: number) => {
		program.workouts.splice(idx, 1);
		program = program;
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
	let changeWorkoutIdx: number | null = null;
</script>

<Dialog bind:open={openBackDialog} aria-labelledby="back-title" aria-describedby="back-content">
	<Title id="back-title">Are you sure?</Title>
	<Content id="back-content">There are unsaved changes. Are you sure you want to quit?</Content>
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
	aria-labelledby="delete-title"
	aria-describedby="delete-content"
>
	<Title id="delete-title">Delete this program?</Title>
	<Content id="delete-content">
		Are you sure you want to delete this program? This action is not reversable.
	</Content>
	<Actions>
		<Button on:click={deleteAndExit}>Yes, delete.</Button>
		<Button defaultAction use={[InitialFocus]} on:click={() => (openDeleteDialog = false)}>
			No, keep editing.
		</Button>
	</Actions>
</Dialog>

<Dialog
	open={changeWorkoutIdx !== null}
	fullscreen
	aria-labelledby="change-title"
	aria-describedby="change-content"
	on:SMUIDialog:closed={() => (changeWorkoutIdx = null)}
>
	<Header>
		<Title id="change-title">Select a workout</Title>
		<IconButton action="close" class="material-symbols-rounded">close</IconButton>
	</Header>
	<Content
		id="change-content"
		class="changed-content"
		style="display: flex;
			   flex-direction: column;
		       gap: 1rem;"
	>
		{#each workouts as wo}
			<WorkoutCard workout={wo} on:click={() => set(wo)} />
		{/each}
	</Content>
</Dialog>

<BackBanner href={back} title={program.name} beforeBack={preventBack}>
	<Button on:click={saveAndExit} disabled={!changed}>Save</Button>
</BackBanner>

<div class="wrapper">
	<Textfield bind:value={program.name} label="Name" />
	{#each program.workouts as wo, idx (wo)}
		{#if idx != 0}
			<Button variant="outlined" on:click={() => swap(idx, idx - 1)}>
				<Icon class="material-symbols-rounded">swap_vert</Icon>
			</Button>
		{/if}
		<WorkoutCard workout={wo} on:click={() => (changeWorkoutIdx = idx)}>
			<Actions slot="actions">
				<Button on:click={() => (changeWorkoutIdx = idx)}>Change</Button>
				<Button on:click={() => remove(idx)}>Remove</Button>
			</Actions>
		</WorkoutCard>
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
