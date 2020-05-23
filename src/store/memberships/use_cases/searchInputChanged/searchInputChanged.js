const searchInputChanged = (state = {}, action = {}) => {
	const updated_state = { ...state };

	function updateStore() {
		return updated_state;
	}

	function clearSelectedMember() {
		updated_state.selected_member_id = null;
		return updateStore();
	}

	function updateSearchValue() {
		const value = action.value || '';
		updated_state.search = value;
		return clearSelectedMember();
	}

	return updateSearchValue();
};

export default searchInputChanged;
