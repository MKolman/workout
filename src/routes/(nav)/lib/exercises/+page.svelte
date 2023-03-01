<script lang="ts">
	import Card, { Content } from '@smui/card';
	import { db } from '../../../../models/db';
	import { Exercise } from '../../../../models/exercise';
	const exercises = Exercise.all();
</script>

{#await exercises then exercises}
	{#each exercises as ex}
		<Card variant="outlined">
			<Content style="display: flex; align-items: center;">
				<span style="flex: 1">{ex.name}</span>
				<span class="material-symbols-rounded">
					{ex.icon()}
				</span>
			</Content>
		</Card>
	{/each}
{/await}
