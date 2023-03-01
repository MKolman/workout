<script lang="ts">
	import Card, { Content } from '@smui/card';
	import { Program } from '../../../models/program';
	import { db as _ } from '../../../models/db';
	let active = 'stronglifts_5x5';
	const programs = Program.all();
</script>

{#await programs then programs}
	{#each programs as prog}
		<Card variant={prog.id == active ? 'outlined' : 'raised'}>
			<Content>
				<h2>{prog.name}</h2>
				{#each prog.workouts as wo}
					<span style="vertical-align: middle">
						{wo.name}
					</span>
					<br />
				{/each}
			</Content>
		</Card>
	{/each}
{/await}
