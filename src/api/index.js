// Actions
import { sheetRequested } from '../store/shared/actions';

function getAssociations() {
	const location = 'associations';
	const sheet_url = process.env.REACT_APP_ASSOCIATIONS_SHEET;
	return sheetRequested({ sheet_url, location });
}

function getMemberships({ sheet_url }) {
	const location = 'memberships';
	return sheetRequested({ sheet_url, location });
}

const api = {
	getAssociations,
	getMemberships,
};

export default api;
