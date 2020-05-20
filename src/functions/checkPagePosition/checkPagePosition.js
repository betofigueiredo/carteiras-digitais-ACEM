export const checkPagePosition = ({
	actual_page = 1,
	selected_page = 1,
} = {}) => {
	const page_position = {
		previous: selected_page > actual_page,
		active: selected_page === actual_page,
		next: selected_page < actual_page,
	};
	const position = Object
		.keys(page_position)
		.map(c => c)
		.filter(c => page_position[c])
		.join(' ');
	return position;
};
