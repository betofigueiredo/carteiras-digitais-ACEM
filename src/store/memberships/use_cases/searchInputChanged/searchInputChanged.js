const searchInputChanged = (state = {}, action = {}) => {
	const updated_state = { ...state };

	function updateStore() {
		return updated_state;
	}

	function clearErrors() {
		updated_state.error = null;
		return updateStore();
	}

	function clearSelectedMember() {
		updated_state.selected_member_id = null;
		return clearErrors();
	}

	function updateSearchValue() {
		const value = action.value || '';
		updated_state.search = value;
		return clearSelectedMember();
	}

	return updateSearchValue();
};

export default searchInputChanged;
