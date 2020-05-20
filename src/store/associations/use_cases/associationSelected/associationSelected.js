const associationSelected = (state = {}, action = {}) => {
	function unchangedStore() {
		return { ...state };
	}

	function updateStore(association_id) {
		const updated_state = {
			...state,
			selected_association_id: association_id,
		};
		return updated_state;
	}

	function checkEmptyId() {
		const association_id = action.association_id || '';
		const invalid_id = association_id === '';
		if (invalid_id) {
			return unchangedStore();
		}
		return updateStore(association_id);
	}

	return checkEmptyId();
};

export default associationSelected;
