import type { Player, PlayerInput, Team, TeamInput } from '$lib/types';

export function new_form_team(input?: Team): TeamInput {
	const form_team: TeamInput = {
		id: input?.id,
		name: input?.name,
		players: input?.players?.map((player) => new_form_player(player))
	};

	return form_team;
}

export function new_form_player(input?: Player): PlayerInput {
	const form_player: PlayerInput = {
		id: input?.id ?? Date.now().toString(),
		name: input?.name,
		age: input?.age,
	};

	return form_player;
}
