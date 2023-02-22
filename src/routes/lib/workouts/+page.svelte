<script lang="ts">
	import Card, { Content } from '@smui/card';
	import { Store } from '../../../models/workout';
	const workouts = Array.from(Store.values()).sort((a, b) => (a.id < b.id ? -1 : 1));
</script>

{#each workouts as wo}
	<Card variant="outlined">
		<Content>
			<h2>{wo.name}</h2>
			{#each wo.setsDisplay() as set}
				<div class="row">
					<span class="name">
						{set.name}
					</span>
					<span class="sets row">
						{set.sets}
						<span class="material-symbols-rounded">
							{set.icon}
						</span>
					</span>
				</div>
			{/each}
		</Content>
	</Card>
{/each}

<style>
	.row {
		display: flex;
		align-items: center;
	}
	.sets {
		gap: 0.2em;
	}
	.name {
		white-space: nowrap;
		flex: 1;
	}
</style>
