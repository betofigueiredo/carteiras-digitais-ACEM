const storeCleared = (state = {}) => ({
	...state,
	fetching: 'TO_START',
	by_id: {},
	all_ids: [],
	selected_membership_id: null,
});

export default storeCleared;
