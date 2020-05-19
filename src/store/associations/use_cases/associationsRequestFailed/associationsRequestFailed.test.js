import associationsRequestFailed from './associationsRequestFailed';
import associations from '../../store';

describe('associationsRequestFailed', () => {
	it('should show error requesting associations', () => {
		const state = { ...associations };
		const result = associationsRequestFailed(state);
		const expected = {
			...state,
			fetching: 'ERROR',
		};
		expect(result).toStrictEqual(expected);
	});
});
