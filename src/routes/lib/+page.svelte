<script lang="ts">
	import Card, { Content } from '@smui/card';
	import { Store } from '../../models/program';
	let active = 'stronglifts_5x5';
	const programs = Array.from(Store.values()).sort((a, b) =>
		[a.id != active, a.id] < [b.id != active, b.id] ? -1 : 1
	);
</script>

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
