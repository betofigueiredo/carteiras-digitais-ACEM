import memberIdCleared from '../memberIdCleared';
import memberships from '../../../store';

describe('memberIdCleared', () => {
	it('should not break with undefined values', () => {
		const result = memberIdCleared();
		const expected = {
            selected_member_id: null,
        };
		expect(result).toStrictEqual(expected);
	});

	it('should reset selected member id', () => {
        const state = {
            ...memberships,
            selected_member_id: 36,
        };
        const action = { value: 'New' };
        const result = memberIdCleared(state, action);
		expect(result).toStrictEqual({
            ...memberships,
            selected_member_id: null,
        });
	});
});
