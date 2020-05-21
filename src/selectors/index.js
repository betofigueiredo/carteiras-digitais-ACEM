function membersSheetUrl(state) {
	const associations = state.associations || {};
	const by_id = associations.by_id || {};
	const { selected_association_id } = associations;
	const sheet_url = by_id[selected_association_id]?.planilha || '';
	return sheet_url;
}

const selectors = {
	membersSheetUrl,
};

export default selectors;
