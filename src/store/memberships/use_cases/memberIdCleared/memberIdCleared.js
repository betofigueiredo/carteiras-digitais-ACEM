const memberIdCleared = (state = {}) => {
	function clearMemberId() {
		const updated_state = {
			...state,
			selected_member_id: null,
		};
		return updated_state;
	}

	return clearMemberId();
};

export default memberIdCleared;
