export const sheetRequested = ({ sheet_url, location }) => ({
	type: `[${location}] FETCH_REQUESTED`,
	sheet_url,
	location,
});
