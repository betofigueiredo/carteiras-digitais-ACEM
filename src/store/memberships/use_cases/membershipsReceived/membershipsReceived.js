// Functions
import { normalizeKeys } from '../../../../functions/normalizeKeys';

const membershipsReceived = (state = {}, action = {}) => {
	const members_by_id = {};
	const members_all_ids = [];

	function updateStore() {
		const updated_state = {
			...state,
			fetching: 'LOADED',
			by_id: members_by_id,
			all_ids: members_all_ids,
		};
		return updated_state;
	}

	function withLowerCaseKeys(member) {
		const normalized = normalizeKeys(member);
		return normalized;
	}

	function normalizeList() {
		const members_list = action.payload || [];
		members_list.forEach(raw_member => {
			const member = withLowerCaseKeys(raw_member);
			const member_id = member?.numero || '';
			members_by_id[member_id] = member;
			members_all_ids.push(member_id);
		});
		return updateStore();
	}

	return normalizeList();
};

export default membershipsReceived;
