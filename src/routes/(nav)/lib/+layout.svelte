<script lang="ts">
	import Tab, { Label } from '@smui/tab';
	import Fab, { Icon } from '@smui/fab';
	import TabBar from '@smui/tab-bar';
	import { page } from '$app/stores';
	const tabs = ['programs', 'workouts', 'exercises', 'search'];
	const urls = new Map<string, string>([
		['programs', '/lib'],
		['workouts', '/lib/workouts'],
		['exercises', '/lib/exercises'],
		['search', '/lib/search'],
	]);
	const path = $page.url.pathname;
	let active = tabs.findLast((tab) => path.startsWith(urls.get(tab) as string));
</script>

<TabBar {tabs} let:tab bind:active>
	<Tab {tab} href={urls.get(tab)}>
		<Label>
			{#if tab != 'search'}
				{tab}
			{:else}
				<Icon class="material-icons">search</Icon>
			{/if}
		</Label>
	</Tab>
</TabBar>
<div class="col-card-holder">
	<slot />
</div>
{#if active !== 'search'}
	<Fab color="primary" style="bottom: 1em; right: 1em; position: absolute;">
		<Icon class="material-icons">add</Icon>
	</Fab>
{/if}

<style>
	div.col-card-holder {
		display: flex;
		flex-direction: column;
		gap: 1em;
		overflow: auto;
		padding: 1em;
		padding-bottom: 10em;
		line-height: 2em;
	}
</style>
