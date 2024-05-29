interface IPlanet {
	name: string;
	url: string;
}

export interface ICharacter {
	id: number;
	created: string;
	epidose: [string];
	gender: string;
	image: string;
	location: IPlanet;
	name: string;
	origin: IPlanet;
	species: string;
	status: string;
	type: string;
	url: string;
}
