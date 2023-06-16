<script lang="ts">
	import { teams } from '$lib/fake_db';

	$: list = $teams.values();
</script>

<div>
	<a href="/teams/new">Create new team</a>
</div>

<h3>Teams:</h3>

<ul>
	{#each Array(...list) as team (team.id)}
		<li>
			{team.id} - {team.name}
		</li>
	{:else}
		<h4>Still no teams</h4>
	{/each}
</ul>
