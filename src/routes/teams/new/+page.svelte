<script lang="ts">
	import { goto } from '$app/navigation';
	import { create_team } from '$lib/fake_db';
	import type { TeamInput } from '$lib/types';
	import { new_form_team } from '../utils';
	import Form from '../Form.svelte';

	const form_team = new_form_team();

	async function submit(form_team: TeamInput) {
		create_team(form_team);

		await goto(`/teams/`, { replaceState: true });
	}
</script>

<Form {submit} {form_team} />
