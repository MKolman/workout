<script lang="ts">
	import { goto } from '$app/navigation';
	import Button, { Icon } from '@smui/button';
	import { browser } from '$app/environment';
	import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import Select, { Option } from '@smui/select';
	import SelectIcon from '@smui/select/icon';

	import BackBanner from 'src/components/BackBanner.svelte';
	import { Exercise, NotLoaded, Type, TypeUtil } from 'src/models/exercise';
	import { db as _ } from 'src/models/db';

	const back = '/lib/exercises';
	let exercise = NotLoaded;
	let orig = JSON.stringify(exercise);
	let typeText = exercise.type;
	let create = true;
	if (browser) {
		let params = new URL(document.location.href).searchParams;
		if (params.has('new')) {
			exercise = Exercise.new();
			orig = '';
			typeText = exercise.type;
		} else {
			create = false;
			Exercise.get(params.get('id') || '').then((ex) => {
				if (!ex) {
					console.error('Workout not found');
					goto(back);
					return;
				}
				exercise = ex;
				orig = JSON.stringify(exercise);
				typeText = exercise.type;
			});
		}
	}
	const saveAndExit = async () => {
		await exercise.save();
		goto(back);
	};
	const deleteAndExit = async () => {
		await exercise.delete();
		goto(back);
	};
	const preventBack = (): boolean => {
		if (!changed) return false;
		openBackDialog = true;
		return true;
	};
	const allTypes = Object.keys(Type);
	let openBackDialog = false;
	let openDeleteDialog = false;
	$: changed = orig != JSON.stringify(exercise);
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
	<Title id="default-focus-title">Delete this exercise?</Title>
	<Content id="default-focus-content">
		Are you sure you want to delete this exercise? This action is not reversable.
	</Content>
	<Actions>
		<Button on:click={deleteAndExit}>Yes, delete.</Button>
		<Button defaultAction use={[InitialFocus]} on:click={() => (openDeleteDialog = false)}>
			No, keep editing.
		</Button>
	</Actions>
</Dialog>

<BackBanner href={back} title={exercise.name} beforeBack={preventBack}>
	<Button on:click={saveAndExit} disabled={!changed}>Save</Button>
</BackBanner>

<div class="wrapper">
	<Textfield bind:value={exercise.name} label="Name" />
	<Textfield bind:value={exercise.shortName} label="Short Name" />
	<Select bind:value={exercise.type} label="Type">
		<SelectIcon slot="leadingIcon" class="material-symbols-rounded">
			{exercise.icon('cancel')}
		</SelectIcon>
		{#each allTypes as type}
			<Option value={type}>
				{type}
			</Option>
		{/each}
	</Select>

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
