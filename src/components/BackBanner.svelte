<script lang="ts">
	import { goto } from '$app/navigation';
	import IconButton from '@smui/icon-button';
	export let href: string;
	export let title: string = 'back';
	export let callback: null | (() => boolean) = null;
	const handleClick = (ev: Event) => {
		if (callback && callback()) {
			ev.preventDefault();
		}
	};
</script>

<div>
	<IconButton
		class="material-icons"
		aria-label="Back"
		on:click={handleClick}
		{href}
		color="secondary"
	>
		arrow_back
	</IconButton>
	<h1>{title}</h1>
	<slot />
</div>

<style>
	div {
		display: flex;
		align-items: center;
	}
	div h1 {
		flex: 1;
	}
</style>
