<script lang="ts">
	import Card, { Content, PrimaryAction } from '@smui/card';
	import Fab, { Icon } from '@smui/fab';
	import { Program } from '../../../models/program';
	import { db as _ } from '../../../models/db';
	import { goto } from '$app/navigation';
	let active = 'stronglifts_5x5';
	const programs = Program.all();
</script>

{#await programs then programs}
	{#each programs as prog}
		<Card variant={prog.id == active ? 'outlined' : 'raised'}>
			<PrimaryAction on:click={() => goto(`/edit/program?id=${prog.id}`)}>
				<Content>
					<h2>{prog.name}</h2>
					{#each prog.workouts as wo}
						<span style="vertical-align: middle">
							{wo.name}
						</span>
						<br />
					{/each}
				</Content>
			</PrimaryAction>
		</Card>
	{/each}
{/await}

<Fab color="primary" style="bottom: 1em; right: 1em; position: absolute;" href="/edit/program?new">
	<Icon class="material-icons">add</Icon>
</Fab>
