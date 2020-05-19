import associations from './store';

// Events
import associationsRequested from './use_cases/associationsRequested';
import associationsReceived from './use_cases/associationsReceived';
import associationsRequestFailed from './use_cases/associationsRequestFailed';

const funcs = {
	'[associations] FETCH_REQUESTED': associationsRequested,
	'[associations] FETCH_RECEIVED': associationsReceived,
	'[associations] FETCH_REQUEST_FAILED': associationsRequestFailed,
};

const reducer = (state = associations, action) => {
	const new_state = funcs[action.type] !== undefined
		? funcs[action.type](state, action)
		: { ...state };
	return new_state;
};

export default reducer;
