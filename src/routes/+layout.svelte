<script lang="ts">
	import { DarkMode } from 'src/models/settings';
	import { liveQuery } from 'dexie';
	import { db as _ } from 'src/models/db';

	let darkMode = liveQuery(() => DarkMode.get());
	$: darkModeEnabled = ($darkMode as DarkMode | undefined)?.enabled;
</script>

<svelte:head>
	<title>Workout</title>
	<!-- SMUI Styles -->
	{#if darkModeEnabled === true}
		<link rel="stylesheet" href="/smui.css" media="print" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen" />
	{:else if darkModeEnabled === false}
		<link rel="stylesheet" href="/smui.css" />
	{:else}
		<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
	{/if}
	<!-- Material Icons -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" />
	<!-- Roboto -->
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
	/>
</svelte:head>

<div class="wrapper"><slot /></div>

<style>
	.wrapper {
		max-width: 800px;
		display: flex;
		height: 100%;
		flex-direction: column;
	}
</style>
