const getPageFromUrl = (match) => {
	const page = match?.params?.page || 'associations';
	const params = {
		associations: 1,
		members: 2,
		profile: 3,
	};
	return params[page] || 1;
};

const getUrlFromPage = (page_number) => {
	const params = {
		1: '',
		2: 'members',
		3: 'profile',
	};
	return params[page_number] || '';
};

export const urlUtils = {
	getPageFromUrl,
	getUrlFromPage,
};
