<script>
	import Button from '@smui/button';
	import { db as _ } from '../../../models/db';
	import Dexie from 'dexie';

	const factoryReset = async () => {
		await Dexie.delete('workoutDb');
		location.reload();
	};
</script>

<h1>Settings</h1>
<Button on:click={factoryReset}>Factory reset the app</Button>
