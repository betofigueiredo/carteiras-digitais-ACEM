import React from 'react';
import PropTypes from 'prop-types';

// CSS
import { Button } from 'antd';
import * as s from './MemberProfile.style';

// Functions
import { checkPagePosition } from '../../functions/checkPagePosition';

const MemberProfile = ({ page, moveToPage }) => {
	const position = checkPagePosition({
		actual_page: 3,
		selected_page: page,
	});

	return (
		<s.MemberProfile position={position}>
			Profile
			<br /><br />
			<Button type="primary" onClick={() => moveToPage(2)}>2</Button>
		</s.MemberProfile>
	);
};

MemberProfile.propTypes = {
	page: PropTypes.number.isRequired,
	moveToPage: PropTypes.func.isRequired,
};

export default MemberProfile;
