<script lang="ts">
	import { Label } from '@smui/common';
	import Textfield from '@smui/textfield';
	import SegmentedButton, { Segment } from '@smui/segmented-button';
	import Autocomplete from '@smui-extra/autocomplete';
	import Card, { Actions, Content } from '@smui/card';
	import Button, { Icon } from '@smui/button';
	import type { Set } from '../../../../models/workout';
	import type { Exercise } from '../../../../models/exercise';
	import { createEventDispatcher } from 'svelte';
	import IconButton from '@smui/icon-button/src/IconButton.svelte';

	const dispatch = createEventDispatcher();

	export let exercises: Exercise[];
	export let set: Set;
	let text = set.exercise.name;
	let selected: { val: number; key: number }[] = [];
	const setButtons = (sets: number[]): { val: number; key: number }[] => {
		let ret = sets.map((set, idx) => ({ val: set, key: idx }));
		ret.push({ val: -1, key: -1 });
		return ret;
	};
	const addOneRep = () => {
		const deleteIdx = selectedIdx();
		deleteIdx.forEach((idx) => {
			segments[idx].val = ++set.sets[idx];
		});
		dispatch('change');
	};

	const removeOneRep = () => {
		const deleteIdx = selectedIdx();
		deleteIdx.forEach((idx) => {
			if (set.sets[idx] <= 0) return;
			segments[idx].val = --set.sets[idx];
		});
		dispatch('change');
	};

	const selectedIdx = () => {
		const selectedKeys = new Set<number>(selected.map((s) => s.key));
		const selectedIdxs = new Set<number>();
		segments.forEach((s, idx) => {
			if (selectedKeys.has(s.key)) {
				selectedIdxs.add(idx);
			}
		});
		return selectedIdxs;
	};

	const deleteSets = () => {
		const deleteIdx = selectedIdx();
		segments = segments.filter((_, idx) => !deleteIdx.has(idx));
		set.sets = set.sets.filter((_, idx) => !deleteIdx.has(idx));
		selected = [];
		dispatch('change');
	};
	const addSet = (ev: Event) => {
		let n = set.sets.length === 0 ? 0 : set.sets[set.sets.length - 1];
		set.sets.push(n);
		segments.splice(segments.length - 1, 0, { val: n, key: key++ });
		segments = segments;
		dispatch('change');
		ev.preventDefault();
	};
	let segments = setButtons(set.sets);
	let key = segments.length;
</script>

<Card variant="outlined">
	<Content style="display: flex; flex-direction: column; gap:1rem">
		<Autocomplete
			options={exercises}
			bind:value={set.exercise}
			bind:text
			getOptionLabel={(op) => (op ? op.name : '')}
		>
			<div class="row" slot="match" let:match>
				<span>{match ? match.name : ''}</span>
				<Icon class="material-symbols-rounded">{match ? match.icon() : 'cancel'}</Icon>
			</div>
			<Textfield style="display: flex" label="Exercise" bind:value={text}>
				<icon slot="trailingIcon" class="material-symbols-rounded">
					{set.exercise ? set.exercise.icon() : 'cancel'}
				</icon>
			</Textfield>
		</Autocomplete>
		<SegmentedButton
			{segments}
			let:segment
			bind:selected
			key={(s) => s.key}
			style="white-space: nowrap;overflow-x: auto;"
		>
			<Segment
				{segment}
				title={segment.key !== -1 ? `Set ${segment.key + 1}` : 'Add new set'}
				style={segment.key !== -1 ? 'flex-direction:column;' : ''}
			>
				{#if segment.key === -1}
					<Icon on:click={addSet} class="material-symbols-rounded">add</Icon>
				{:else}
					<Label>{segment.val}</Label>
				{/if}
			</Segment>
		</SegmentedButton>
	</Content>
	<Actions>
		<IconButton
			disabled={selected.length === 0}
			on:click={removeOneRep}
			class="material-symbols-rounded">remove</IconButton
		>
		<IconButton
			disabled={selected.length === 0}
			on:click={deleteSets}
			class="material-symbols-rounded">delete</IconButton
		>
		<IconButton
			disabled={selected.length === 0}
			on:click={addOneRep}
			class="material-symbols-rounded">add</IconButton
		>
		<span style="flex:1; text-align:right;">
			<Button style="flex:1" color="primary" on:click={() => dispatch('remove')}>remove</Button>
		</span>
	</Actions>
</Card>

<style>
	.row {
		flex: 1;
		display: flex;
		align-items: center;
	}
	.row span {
		flex: 1;
	}
</style>
