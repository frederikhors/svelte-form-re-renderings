import { writable, type Writable } from 'svelte/store';

import type { Player, Team, TeamInput } from './types';

export const teams: Writable<Map<string, Team>> = writable(new Map());

export const players: Writable<Map<string, Player>> = writable(new Map());

export function create_team(input: TeamInput): Team {
	const new_team_id = input.id || Date.now().toString();

	const new_team: Team = {
		id: new_team_id,
		name: input.name || '',
		players: input.players?.map((p) => ({
			id: p.id,
			name: p.name || '',
			team_id: new_team_id
		}))
	};

	teams.update(v => v.set(new_team.id, new_team));
	
	if (new_team.players) {
		for (const player of new_team.players) {
			players.update(v => v.set(player.id, player));
			
		}
	}

	return new_team;
}
