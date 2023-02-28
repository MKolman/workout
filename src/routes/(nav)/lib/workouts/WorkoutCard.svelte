<script lang="ts">
	import Card, { Content, PrimaryAction } from '@smui/card';
	import type { Workout } from '../../../../models/workout';
	import { goto } from '$app/navigation';

	export let workout: Workout;
	export let href: string;
</script>

<Card variant="outlined">
	<PrimaryAction on:click={() => goto(href)}>
		<Content {href}>
			<h2>{workout.name}</h2>
			{#each workout.setsDisplay() as set}
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
		</Content></PrimaryAction
	>
</Card>

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
