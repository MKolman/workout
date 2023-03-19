<script lang="ts">
	import Card, { Content, PrimaryAction } from '@smui/card';
	import type { Program } from 'src/models/program';
	import { db as _ } from 'src/models/db';
	import { ActiveProgram } from 'src/models/settings';
	export let program: Program;
	export let click: () => void;
	export let active: string | null = null;
	if (active === null) {
		ActiveProgram.getProgramId().then((id) => {
			active = id || '';
		});
	}
</script>

<Card color="red" variant={program.id === active ? 'outlined' : 'raised'}>
	<PrimaryAction on:click={click}>
		<Content>
			<h2>{program.name}</h2>
			{#each program.workouts as wo}
				<span>
					{wo.name}
				</span>
				<br />
			{/each}
		</Content>
	</PrimaryAction>
</Card>
