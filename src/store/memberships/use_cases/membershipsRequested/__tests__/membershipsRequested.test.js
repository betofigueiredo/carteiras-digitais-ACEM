import membershipsRequested from '../membershipsRequested';
import memberships from '../../../store';

describe('membershipsRequested', () => {
	it('should start fetching memberships', () => {
		const state = { ...memberships };
		const result = membershipsRequested(state);
		const expected = {
			...state,
            fetching: 'FETCHING',
		};
		expect(result).toStrictEqual(expected);
	});
});
