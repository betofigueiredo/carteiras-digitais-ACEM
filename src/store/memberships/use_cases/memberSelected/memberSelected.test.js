import memberSelected from './memberSelected';
import memberships from '../../store';

describe('memberSelected', () => {
	it('should not break with undefined values', () => {
		const call = memberSelected();
		expect(call).toStrictEqual({});
	});

	it('should return default store, invalid member id', () => {
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
