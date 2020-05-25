import memberSelected from '../memberSelected';
import memberships from '../../../store';

describe('memberSelected', () => {
	it('should return empty_search error', () => {
		const call = memberSelected();
		expect(call).toStrictEqual({
            "error": 'empty_search',
        });
	});

	it('should return user_does_not_exist error', () => {
        const state = {
            ...memberships,
            search: '36',
            by_id: {
                '35': { name: 'Name' },
            },
        };
        const action = { value: 'New' };
        const result = memberSelected(state, action);
		expect(result).toStrictEqual({
            ...state,
            selected_member_id: null,
            error: 'user_does_not_exist',
        });
	});

	it('should reset errors', () => {
        const state = {
            ...memberships,
            search: '36',
            by_id: {
                '36': { name: 'Name' },
            },
            error: 'user_does_not_exist',
        };
        const action = { value: 'New' };
        const result = memberSelected(state, action);
		expect(result).toStrictEqual({
            ...state,
            selected_member_id: '36',
            error: null,
        });
	});

	it('should reset selected member id', () => {
        const state = {
            ...memberships,
            search: '36',
            by_id: {
                '36': { name: 'Name' },
            },
        };
        const action = { value: 'New' };
        const result = memberSelected(state, action);
		expect(result).toStrictEqual({
            ...state,
            selected_member_id: '36',
        });
	});
});
