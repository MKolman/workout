<script lang="ts">
	import BottomAppBar, { Section } from '@smui-extra/bottom-app-bar';
	import NavButton from '../components/NavButton.svelte';

	import { page } from '$app/stores';

	$: currentRoute = $page.url.pathname;
</script>

<!-- Material Icons -->
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" />
<!-- Roboto -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700" />
<!-- SMUI Styles -->
<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />

<div class="wrapper">
	<div class="app-body"><slot /></div>
	<BottomAppBar variant="static" color="secondary">
		<Section style="justify-content: space-around;">
			<NavButton label="Excersize" icon="fitness_center" route="/work" />
			<NavButton label="Analytics" icon="insights" route="/stats" />
			<NavButton label="Fitness Library" icon="menu_book" route="/lib" />
			<NavButton label="Settings" icon="settings" route="/settings" />
		</Section>
	</BottomAppBar>
</div>

<style>
	.wrapper {
		max-width: 800px;
		display: flex;
		height: 100%;
		flex-direction: column;
	}
	.app-body {
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
</style>
