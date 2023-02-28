<script lang="ts">
	import BottomAppBar, { Section } from '@smui-extra/bottom-app-bar';
	import NavButton from '../../components/NavButton.svelte';
</script>

<div class="app-body"><slot /></div>
<BottomAppBar variant="static" color="secondary">
	<Section style="justify-content: space-around;">
		<NavButton label="Excersize" icon="fitness_center" route="/work" />
		<NavButton label="Analytics" icon="insights" route="/stats" />
		<NavButton label="Fitness Library" icon="menu_book" route="/lib" />
		<NavButton label="Settings" icon="settings" route="/settings" />
	</Section>
</BottomAppBar>

<style>
	.app-body {
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
</style>
