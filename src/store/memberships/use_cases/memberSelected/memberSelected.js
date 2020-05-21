const memberSelected = (state = {}) => {
	const search = state.search || '';

	function showError() {
		// TODO error
		return { ...state };
	}

	function selectMember(member_id) {
		const updated_state = {
			...state,
			selected_member_id: member_id,
		};
		return updated_state;
	}

	function checkIfMemberExists() {
		const member_id = search;
		const by_id = state.by_id || {};
		const member_info = by_id[member_id];
		const invalid_member = member_info === undefined;
		if (invalid_member) {
			return showError();
		}
		return selectMember(member_id);
	}

	function getSearchedId() {
		const invalid_search = search === '';
		if (invalid_search) {
			return showError();
		}
		return checkIfMemberExists();
	}

	return getSearchedId();
};

export default memberSelected;
