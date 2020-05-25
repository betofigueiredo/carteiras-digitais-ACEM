import associationSelected from '../associationSelected';
import associations from '../../../store';

describe('associationSelected', () => {
	it('should not break with undefined values', () => {
		const result = associationSelected();
		expect(result).toStrictEqual({});
	});

	it('should handle null value', () => {
        const state = { ...associations };
        const action = { association_id: null };
        const result = associationSelected(state, action);
		expect(result).toStrictEqual(state);
	});

	it('should select the association', () => {
        const state = { ...associations };
        const action = { association_id: '78645435656' };
        const result = associationSelected(state, action);
        const expected = {
            ...state,
            selected_association_id: '78645435656',
        }
		expect(result).toStrictEqual(expected);
	});
});
