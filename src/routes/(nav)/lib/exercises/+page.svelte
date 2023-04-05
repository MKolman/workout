<script lang="ts">
	import Card, { Content, PrimaryAction } from '@smui/card';
	import Fab, { Icon } from '@smui/fab';
	import { goto } from '$app/navigation';
	import { Exercise } from 'src/models/exercise';
	import { db as _ } from 'src/models/db';
	const exercises = Exercise.all();
</script>

{#await exercises then exercises}
	{#each exercises as ex}
		<Card variant="outlined">
			<PrimaryAction on:click={() => goto(`/edit/exercise?id=${ex.id}`)}>
				<Content style="display: flex; align-items: center;">
					<span style="flex: 1">{ex.name}</span>
					<span class="material-symbols-rounded">
						{ex.icon()}
					</span>
				</Content>
			</PrimaryAction>
		</Card>
	{/each}
{/await}

<Fab color="primary" style="bottom: 1em; right: 1em; position: absolute;" href="/edit/exercise?new">
	<Icon class="material-icons">add</Icon>
</Fab>
