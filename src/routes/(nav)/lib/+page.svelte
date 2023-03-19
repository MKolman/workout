<script lang="ts">
	import Fab, { Icon } from '@smui/fab';
	import { goto } from '$app/navigation';

	import { Program } from 'src/models/program';
	import { db as _ } from 'src/models/db';
	import ProgramCard from './ProgramCard.svelte';
	const programs = Program.all();
</script>

{#await programs then programs}
	{#each programs as program}
		<ProgramCard {program} click={() => goto(`/edit/program?id=${program.id}`)} />
	{/each}
{/await}

<Fab color="primary" style="bottom: 1em; right: 1em; position: absolute;" href="/edit/program?new">
	<Icon class="material-icons">add</Icon>
</Fab>
