export const normalizeKeys = (object = {}) => {
	const normalized = {};
	Object.keys(object).forEach(key => {
		const normalized_key = key
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/ /g, '_')
			.toLowerCase();
		normalized[normalized_key] = object[key];
	});
	return normalized;
};
