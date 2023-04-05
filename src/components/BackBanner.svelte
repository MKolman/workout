<script lang="ts">
	import IconButton from '@smui/icon-button';
	export let href: string;
	export let title: string = 'back';
	export let beforeBack: null | (() => boolean) = null;
	const callback = (ev: Event) => {
		if (beforeBack && beforeBack()) {
			ev.preventDefault();
		}
	};
</script>

<div>
	<IconButton class="material-icons" aria-label="Back" on:click={callback} {href} color="secondary">
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
