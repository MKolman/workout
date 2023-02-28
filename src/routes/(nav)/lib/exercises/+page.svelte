<script lang="ts">
	import Card, { Content } from '@smui/card';
	import { Store } from '../../../../models/exercise';
	const exercises = Array.from(Store.values()).sort((a, b) => (a.id < b.id ? -1 : 1));
</script>

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
