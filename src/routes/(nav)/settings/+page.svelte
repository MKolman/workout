<script>
	import Button from '@smui/button';
	import { populateExercises } from '../../../models/exercise';
	import { populatePrograms } from '../../../models/program';
	import { populateWorkouts } from '../../../models/workout';
	import { db as _ } from '../../../models/db';
</script>

<h1>Settings</h1>
<Button
	on:click={() => {
		populateExercises();
		populateWorkouts();
		populatePrograms();
	}}>Load</Button
>
