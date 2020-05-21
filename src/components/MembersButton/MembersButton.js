import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// CSS
import { Button } from 'antd';

// Actions
import { memberSelected } from '../../store/memberships/actions';

const MembersButton = ({ moveToPage, page }) => {
	const dispatch = useDispatch();
	const selected_member_id = useSelector(store => store
		.memberships.selected_member_id, shallowEqual) || null;

	useEffect(() => {
		const valid_id = selected_member_id !== null;
		const page_active = page === 2;
		if (valid_id && page_active) {
			moveToPage(3);
		}
	}, [selected_member_id]);

	function selectMember() {
		const action = memberSelected();
		dispatch(action);
	}

	return (
		<Button
			type="primary"
			onClick={selectMember}
		>
			Buscar associado
		</Button>
	);
};

MembersButton.propTypes = {
	moveToPage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
};

export default MembersButton;
