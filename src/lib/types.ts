export type Team = {
	id: string;
	name: string;
	players?: Player[];
};

export type TeamInput = {
	id?: string;
	name?: string;
	players?: PlayerInput[];
};

export type Player = {
	id: string;
	name: string;
	age?: number;
	team_id: string;
};

export type PlayerInput = {
	id: string;
	name?: string;
	age?: number;
};
