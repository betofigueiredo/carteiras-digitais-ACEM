import searchInputChanged from './searchInputChanged';
import memberships from '../../store';

describe('searchInputChanged', () => {
	it('should not break with undefined values', () => {
		const result = searchInputChanged();
		const expected = {
            search: '',
            selected_member_id: null,
        };
		expect(result).toStrictEqual(expected);
	});

	it('should update the search field', () => {
        const state = { ...memberships };
        const action = { value: 'tes' };
        const result = searchInputChanged(state, action);
		expect(result.search).toStrictEqual('tes');
	});

	it('should update the search field and reset selected id', () => {
        const state = {
            ...memberships,
            search: 'Ne',
            selected_member_id: 36,
        };
        const action = { value: 'New' };
        const result = searchInputChanged(state, action);
		expect(result).toStrictEqual({
            ...memberships,
            search: 'New',
            selected_member_id: null,
        });
	});
});
