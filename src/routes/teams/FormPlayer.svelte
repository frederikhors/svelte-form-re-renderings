<script lang="ts">
	import type { PlayerInput } from '$lib/types';

	export let DeletePlayer: (e: Event) => void;
	export let player: PlayerInput;

	$: console.log('Inside FormPlayer.svelte:', player);
</script>

<li>
	<div>
		<label for="name">Player Name</label>

		<input type="text" bind:value={player.name} />
	</div>

	<div>
		<label for="age">Age</label>

		<input type="number" bind:value={player.age} />
	</div>

	<button on:click={DeletePlayer} data-id={player.id}>Remove player</button>
</li>
