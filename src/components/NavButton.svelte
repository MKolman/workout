<script lang="ts">
	import IconButton from '@smui/icon-button';
	import { page } from '$app/stores';
	export let label: string;
	export let icon: string;
	export let route: string;
	$: currentRoute = $page.url.pathname;
</script>

<a href={route} class:underlined={currentRoute.startsWith(route)} class="undecorated">
	<IconButton class="material-icons" aria-label={label}>
		{icon}
	</IconButton>
</a>

<style>
	.undecorated {
		text-decoration: none;
		color: var(--mdc-theme-text-secondary-on-background);
	}
	.underlined {
		text-decoration: underline;
	}
</style>
