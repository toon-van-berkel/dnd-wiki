import {
	campaignConfig,
	getParty,
	isPartyId,
	parties as partyOptions,
	type Party as CampaignParty,
	type PartyId
} from '../config/campaigns.js';

export const parties = campaignConfig.parties;

export type PartyCode = PartyId;
export type Party = CampaignParty['name'];
export type PartyOption = CampaignParty;

export { getParty, isPartyId, partyOptions };

export function selectParties(...codes: PartyCode[]): PartyCode[] {
	return codes;
}

export function getPartyIdByName(name: string): PartyCode | undefined {
	return partyOptions.find((party) => party.name === name)?.id;
}
