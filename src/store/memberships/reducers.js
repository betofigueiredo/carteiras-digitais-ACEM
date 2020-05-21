import memberships from './store';

// Events
import storeCleared from './use_cases/storeCleared';
import membershipsRequested from './use_cases/membershipsRequested';
import membershipsReceived from './use_cases/membershipsReceived';
import membershipsRequestFailed from './use_cases/membershipsRequestFailed';

const funcs = {
	'[shared] ASSOCIATION_SELECTED': storeCleared,
	'[memberships] FETCH_REQUESTED': membershipsRequested,
	'[memberships] FETCH_RECEIVED': membershipsReceived,
	'[memberships] FETCH_REQUEST_FAILED': membershipsRequestFailed,
};

const reducer = (state = memberships, action) => {
	const new_state = funcs[action.type] !== undefined
		? funcs[action.type](state, action)
		: { ...state };
	return new_state;
};

export default reducer;
