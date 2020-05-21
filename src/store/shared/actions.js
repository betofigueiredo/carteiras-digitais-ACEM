export const sheetRequested = ({ sheet_url, location }) => ({
	type: `[${location}] FETCH_REQUESTED`,
	sheet_url,
	location,
});

export const associationSelected = ({ association_id }) => ({
	type: '[shared] ASSOCIATION_SELECTED',
	association_id,
});
