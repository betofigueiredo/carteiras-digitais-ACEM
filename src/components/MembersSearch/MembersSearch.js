import React from 'react';
import PropTypes from 'prop-types';

// CSS
import { Button } from 'antd';
import * as s from './MembersSearch.style';

// Functions
import { checkPagePosition } from '../../functions/checkPagePosition';

const MembersSearch = ({ page, setPage }) => {
	const position = checkPagePosition({
		actual_page: 2,
		selected_page: page,
	});

	return (
		<s.MembersPage position={position}>
			MembersSearch
			<br /><br />
			<Button type="primary" onClick={() => setPage(1)}>1</Button>
			<br /><br />
			<Button type="primary" onClick={() => setPage(3)}>3</Button>
		</s.MembersPage>
	);
};

MembersSearch.propTypes = {
	page: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};

export default MembersSearch;
