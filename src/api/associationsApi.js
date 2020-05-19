// Actions
import { sheetRequested } from '../store/associations/actions';

function getAssociations() {
	const sheet_url = process.env.REACT_APP_ASSOCIATIONS_SHEET;
	return sheetRequested({ sheet_url });
}

const api = {
	getAssociations,
};

export default api;
