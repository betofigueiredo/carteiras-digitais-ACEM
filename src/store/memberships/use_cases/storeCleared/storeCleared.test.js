import storeCleared from './storeCleared';
import memberships from '../../store';

describe('storeCleared', () => {
	it('should reset the store when new association selected', () => {
		const state = { ...memberships };
		const result = storeCleared(state);
		const expected = {
			...state,
            fetching: 'TO_START',
            by_id: {},
            all_ids: [],
            selected_member_id: null,
		};
		expect(result).toStrictEqual(expected);
	});
});
