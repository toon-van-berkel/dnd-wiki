export type PersonId =
	| 'andy'
	| 'arch'
	| 'aron'
	| 'ben'
	| 'bryce'
	| 'casper'
	| 'jaydon'
	| 'liam'
	| 'lucas'
	| 'mathijs'
	| 'melvin'
	| 'mo'
	| 'rafeal'
	| 'roel'
	| 'ronin'
	| 'sam'
	| 'stan'
	| 'stijn'
	| 'thomas'
	| 'tijs'
	| 'tiago'
	| 'toon'
	| 'tyler'
	| 'vince';

export type Person = {
	id: PersonId;
	name: string;
};

export const people = {
	andy: { id: 'andy', name: 'Andy' },
	arch: { id: 'arch', name: 'Arch' },
	aron: { id: 'aron', name: 'Aron' },
	ben: { id: 'ben', name: 'Ben' },
	bryce: { id: 'bryce', name: 'Bryce' },
	casper: { id: 'casper', name: 'Casper' },
	jaydon: { id: 'jaydon', name: 'Jaydon' },
	liam: { id: 'liam', name: 'Liam' },
	lucas: { id: 'lucas', name: 'Lucas' },
	mathijs: { id: 'mathijs', name: 'Mathijs' },
	melvin: { id: 'melvin', name: 'Melvin' },
	mo: { id: 'mo', name: 'Mo' },
	rafeal: { id: 'rafeal', name: 'Rafeal' },
	roel: { id: 'roel', name: 'Roel' },
	ronin: { id: 'ronin', name: 'Ronin' },
	sam: { id: 'sam', name: 'Sam' },
	stan: { id: 'stan', name: 'Stan' },
	stijn: { id: 'stijn', name: 'Stijn' },
	thomas: { id: 'thomas', name: 'Thomas' },
	tijs: { id: 'tijs', name: 'Tijs' },
	tiago: { id: 'tiago', name: 'Tiago' },
	toon: { id: 'toon', name: 'Toon van Berkel' },
	tyler: { id: 'tyler', name: 'Tyler' },
	vince: { id: 'vince', name: 'Vince' }
} satisfies Record<PersonId, Person>;

export function isPersonId(value: string): value is PersonId {
	return value in people;
}

export function getPerson(id: PersonId): Person {
	return people[id];
}

export function getPersonDisplayName(id: PersonId): string {
	return people[id].name;
}

export function getPersonDisplayNames(ids: readonly PersonId[]): string[] {
	return ids.map(getPersonDisplayName);
}
