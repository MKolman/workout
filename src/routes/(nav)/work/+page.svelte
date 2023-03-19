<script lang="ts">
	import Dialog, { Title, Content, Header } from '@smui/dialog';
	import IconButton from '@smui/icon-button';
	import { Program, NotLoaded } from 'src/models/program';
	import { ActiveProgram } from 'src/models/settings';
	import { db as _ } from 'src/models/db';
	import WorkoutCard from '../lib/workouts/WorkoutCard.svelte';
	import ProgramCard from '../lib/ProgramCard.svelte';
	import Button, { Icon } from '@smui/button';

	let activeProgram = NotLoaded;
	(async () => {
		let prog = await ActiveProgram.get().catch((err) =>
			console.error('Failed to load active program', err),
		);
		if (!prog) {
			console.error('Active program not found', prog);
			return;
		}
		activeProgram = await Program.get(prog.programId);
	})();
	let openChangeProgram = false;
	const set = (program: Program) => {
		ActiveProgram.set(program.id);
		activeProgram = program;
		openChangeProgram = false;
	};
</script>

<Dialog
	bind:open={openChangeProgram}
	fullscreen
	aria-labelledby="change-title"
	aria-describedby="change-content"
>
	<Header>
		<Title id="change-title">Select a new program</Title>
		<IconButton action="close" class="material-symbols-rounded">close</IconButton>
	</Header>
	<Content
		id="change-content"
		class="changed-content"
		style="display: flex;
			   flex-direction: column;
		       gap: 1rem;"
	>
		{#await Program.all() then programs}
			{#each programs as program}
				<ProgramCard {program} click={() => set(program)} active={activeProgram.id} />
			{/each}
		{/await}
	</Content>
</Dialog>

<div class="col-card-holder">
	<Button on:click={() => (openChangeProgram = true)}>
		{activeProgram.name}
		<Icon class="material-symbols-rounded">edit</Icon>
	</Button>
	{#each activeProgram.workouts as workout}
		<WorkoutCard {workout} href="/active?program={activeProgram.id}&workout={workout.id}" />
	{/each}
</div>

<style>
	div.col-card-holder {
		display: flex;
		flex-direction: column;
		gap: 1em;
		overflow: auto;
		padding: 1em;
		padding-bottom: 10em;
		line-height: 2em;
	}
</style>
