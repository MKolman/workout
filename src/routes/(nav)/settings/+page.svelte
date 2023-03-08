<script>
	import Button, { Label, Icon } from '@smui/button';
	import { DarkMode } from 'src/models/settings';
	import { db as _ } from 'src/models/db';
	import Dexie from 'dexie';

	const factoryReset = async () => {
		await Dexie.delete('workoutDb');
		location.reload();
	};
	let darkMode = new DarkMode();
	DarkMode.get().then((dm) => {
		if (dm) darkMode = dm;
		console.log('darkMode', darkMode);
	});
</script>

<div class="wrapper">
	<h1>Settings</h1>
	<Button
		variant="outlined"
		on:click={() => {
			darkMode.toggle();
			darkMode.save();
			darkMode = darkMode;
		}}
	>
		<Label style="flex:1">Toggle dark mode</Label>
		<Icon class="material-symbols-rounded">
			{#if darkMode.enabled === false}
				light_mode
			{:else if darkMode.enabled === true}
				dark_mode
			{:else}
				brightness_auto
			{/if}
		</Icon>
	</Button>
	<Button variant="outlined" on:click={factoryReset}><Label>Factory reset the app</Label></Button>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		gap: 2rem;
	}
</style>
