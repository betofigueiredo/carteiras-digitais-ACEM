import { v5 as uuidv5 } from 'uuid';

const associationsReceived = (state = {}, action = {}) => {
	const associations_by_id = {};
	const associations_all_ids = [];

	function updateStore() {
		const updated_state = {
			...state,
			fetching: 'LOADED',
			by_id: associations_by_id,
			all_ids: associations_all_ids,
		};
		return updated_state;
	}

	function createUniqueId(planilha_url) {
		const MY_NAMESPACE = process.env.REACT_APP_NAMESPACE;
		const unique_id = uuidv5(planilha_url, MY_NAMESPACE);
		return unique_id;
	}

	function withLowerCaseKeys(association) {
		const normalized_association = {};
		Object.keys(association).forEach(key => {
			const normalized_key = key
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '')
				.replace(/ /g, '_')
				.toLowerCase();
			normalized_association[normalized_key] = association[key];
		});
		return normalized_association;
	}

	function normalizeList() {
		const associations_list = action.payload || [];
		associations_list.forEach(raw_association => {
			const association = withLowerCaseKeys(raw_association);
			const planilha_url = association?.planilha || '';
			const association_id = createUniqueId(planilha_url);
			associations_by_id[association_id] = association;
			associations_all_ids.push(association_id);
		});
		return updateStore();
	}

	return normalizeList();
};

export default associationsReceived;
