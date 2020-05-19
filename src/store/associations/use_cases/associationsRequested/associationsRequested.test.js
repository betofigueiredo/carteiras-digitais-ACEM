import associationsRequested from './associationsRequested';
import associations from '../../store';

describe('associationsRequested', () => {
	it('should start fetching associations', () => {
		const state = { ...associations };
		const result = associationsRequested(state);
		const expected = {
			...state,
            fetching: 'FETCHING',
		};
		expect(result).toStrictEqual(expected);
	});
});
