export const membersSheetRequested = () => ({
	type: '[memberships] FETCH_REQUESTED',
});

export const searchInputChanged = ({ value }) => ({
	type: '[memberships] SEARCH_INPUT_CHANGE',
	value,
});

export const memberSelected = () => ({
	type: '[memberships] MEMBER_SELECTED',
});

export const memberIdCleared = () => ({
	type: '[memberships] MEMBER_ID_CLEARED',
});
