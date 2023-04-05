<script lang="ts">
	import Tab, { Label } from '@smui/tab';
	import { Icon } from '@smui/fab';
	import TabBar from '@smui/tab-bar';
	import { page } from '$app/stores';
	const tabs = ['ssid_chart', 'calendar_month', 'list'];
	const urls = new Map<string, string>([
		['ssid_chart', '/stats'],
		['calendar_month', '/stats/calendar'],
		['list', '/stats/list'],
	]);
	$: path = $page.url.pathname;
	$: active = tabs.findLast((tab) => path.startsWith(urls.get(tab) as string));
</script>

<TabBar {tabs} let:tab bind:active>
	<Tab {tab} href={urls.get(tab)}>
		<Label>
			<Icon class="material-icons">{tab}</Icon>
		</Label>
	</Tab>
</TabBar>
<slot />
