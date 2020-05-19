import Papa from 'papaparse';

function get({ sheet_url }) {
	return new Promise((resolve) => {
		Papa.parse(sheet_url, {
			download: true,
			header: true,
			complete: (results) => {
				const data = results.data || [];
				resolve(data);
			},
		});
	});
}

const sheets = {
	get,
};

export default sheets;
