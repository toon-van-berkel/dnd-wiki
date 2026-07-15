export const parties = {
	i1: {name: 'Party 1',color: '--party-i1',softColor: '--party-i1-soft'},
	i2: {name: 'Party 2 - LuckyClover',color: '--party-i2',softColor: '--party-i2-soft'},
	i3: {name: 'Party 3 - FCGoonUnited',color: '--party-i3',softColor: '--party-i3-soft'},
	i4: {name: 'Party 4',color: '--party-i4',softColor: '--party-i4-soft'},
	i5: {name: 'Party 5 - FemboyAss',color: '--party-i5',softColor: '--party-i5-soft'},
	i6: {name: 'Party 6 - Crops',color: '--party-i6',softColor: '--party-i6-soft'},
	i7: {name: 'Main - 750',color: '--party-i7',softColor: '--party-i7-soft'},
	i8: {name: 'Scouting - MotelyCrew',color: '--party-i8',softColor: '--party-i8-soft'}
} as const;

export type PartyCode = keyof typeof parties;
export type Party = (typeof parties)[PartyCode]['name'];

export function selectParties(...codes: PartyCode[]): Party[] {
	return codes.map((code) => parties[code].name);
}