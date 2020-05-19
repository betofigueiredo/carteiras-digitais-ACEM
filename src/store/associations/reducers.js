import associations from './store';

const funcs = {};

const reducer = (state = associations, action) => {
	const new_state = funcs[action.type] !== undefined
		? funcs[action.type](state, action)
		: { ...state };
	return new_state;
};

export default reducer;
