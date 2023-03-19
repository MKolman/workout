<script lang="ts">
	import Button from '@smui/button';
	import Dialog, { Title, Content, Actions, InitialFocus, Header } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import { type Type, TypeUtil } from 'src/models/exercise';
	export let value: number;
	export let type: Type;
	let open = false;
</script>

<Dialog bind:open aria-labelledby="change-title" aria-describedby="change-content">
	<Header>
		<Title id="change-title">Select a new program</Title>
	</Header>
	<Content
		id="change-content"
		class="changed-content"
		style="display: flex;
			   flex-direction: column;
		       gap: 1rem;"
	>
		<Textfield label="Weight" bind:value type="number" />
	</Content>

	<Actions>
		<Button on:click={() => (open = false)}>Done</Button>
	</Actions>
</Dialog>

<Button color="secondary" variant="text" on:click={() => (open = true)}>
	{TypeUtil.formatDifficulty(type, value)}
</Button>
