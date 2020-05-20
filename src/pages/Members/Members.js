import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// CSS
import { Button, Input } from 'antd';
import * as s from './Members.style';

// Functions
import { checkPagePosition } from '../../functions/checkPagePosition';

const Members = ({ page, moveToPage }) => {
	const position = checkPagePosition({
		actual_page: 2,
		selected_page: page,
	});

	useEffect(() => {
		if (position === 'active') {
			console.log('aaaaaaaaaaaaaaa');
		}
	}, [position]);

	return (
		<s.MembersPage position={position}>
			<Button onClick={() => moveToPage(1)}>Voltar</Button>
			<br /><br />
			Members
			<br /><br />
			<Input placeholder="Basic usage" />
			<br /><br />
			<Button type="primary" onClick={() => moveToPage(3)}>3</Button>
		</s.MembersPage>
	);
};

Members.propTypes = {
	page: PropTypes.number.isRequired,
	moveToPage: PropTypes.func.isRequired,
};

export default Members;
