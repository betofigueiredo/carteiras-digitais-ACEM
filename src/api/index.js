// Actions
import { associationsSheetRequested } from '../store/associations/actions';
import { membersSheetRequested } from '../store/memberships/actions';

function getAssociations() {
	const sheet_url = process.env.REACT_APP_ASSOCIATIONS_SHEET;
	return associationsSheetRequested({ sheet_url });
}

function getMemberships() {
	return membersSheetRequested();
}

const api = {
	getAssociations,
	getMemberships,
};

export default api;
