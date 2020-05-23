const memberSelected = (state = {}) => {
	const search = state.search || '';

	function showError(error) {
		return {
			...state,
			error,
		};
	}

	function selectMember(member_id) {
		const updated_state = {
			...state,
			selected_member_id: member_id,
			error: null,
		};
		return updated_state;
	}

	function checkIfMemberExists() {
		const member_id = search;
		const by_id = state.by_id || {};
		const member_info = by_id[member_id];
		const invalid_member = member_info === undefined;
		if (invalid_member) {
			const error = 'user_does_not_exist';
			return showError(error);
		}
		return selectMember(member_id);
	}

	function getSearchedId() {
		const invalid_search = search === '';
		if (invalid_search) {
			const error = 'empty_search';
			return showError(error);
		}
		return checkIfMemberExists();
	}

	return getSearchedId();
};

export default memberSelected;
