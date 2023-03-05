<script lang="ts">
	import Card, { Content, PrimaryAction } from '@smui/card';
	import type { Workout } from '../../../../models/workout';
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';

	export let workout: Workout;
	export let href: string | null = null;

	const dispatch = createEventDispatcher();
	const click = () => {
		if (href) {
			goto(href);
			return;
		}
		dispatch('click');
	};
</script>

<Card variant="outlined">
	<PrimaryAction on:click={click}>
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
		</Content>
	</PrimaryAction>
	<slot name="actions" />
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
