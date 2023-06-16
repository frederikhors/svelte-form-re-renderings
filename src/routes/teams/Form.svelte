<script lang="ts">
	import type { TeamInput } from '$lib/types';
	import FormPlayer from './FormPlayer.svelte';
	import { new_form_player } from './utils';

	export let form_team: TeamInput;
	export let submit: (form_team: TeamInput) => void;

	let form = form_team;

	if (!form.players?.length) AddPlayer();

	function AddPlayer() {
		form.players = [...(form.players || []), new_form_player()];
	}

	function DeletePlayer(e: Event) {
		const deletedId = (e.currentTarget as HTMLElement).getAttribute('data-id');
		if (!deletedId) return;
		form.players = form.players?.filter((p) => p.id !== deletedId);
	}

	$: average_age =
		(form.players?.reduce((sum, r) => sum + (r.age || 0), 0) ?? 0) / (form.players?.length || 0);

</script>

<form on:submit|preventDefault={() => submit(form)}>
	<div>
		<div>
			<label for="name">Team name</label>

			<input type="name" id="name" bind:value={form.name} />
		</div>

		<!-- <div>
			<SelectCoach required bind:id={form.coachId} />
		</div> -->
	</div>

	<br />

	<div>
		<ul>
			{#each form.players || [] as player (player.id)}
				<FormPlayer bind:player {DeletePlayer} />
				<br />
			{:else}
				<h3>Still no player</h3>
			{/each}
		</ul>
	</div>

	<button type="button" on:click={AddPlayer}>Add new player</button>

	<br /><br />

	<div>
		Average age of players: {average_age}
	</div>

	<button type="submit">Submit</button>
</form>
