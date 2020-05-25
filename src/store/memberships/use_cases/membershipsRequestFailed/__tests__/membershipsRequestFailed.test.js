import membershipsRequestFailed from '../membershipsRequestFailed';
import memberships from '../../../store';

describe('membershipsRequestFailed', () => {
	it('should show error requesting memberships', () => {
		const state = { ...memberships };
		const result = membershipsRequestFailed(state);
		const expected = {
			...state,
			fetching: 'ERROR',
		};
		expect(result).toStrictEqual(expected);
	});
});
