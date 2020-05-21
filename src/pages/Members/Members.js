import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// CSS
import { Button, Input } from 'antd';
import * as s from './Members.style';

// Api
import api from '../../api';

// Functions
import { checkPagePosition } from '../../functions/checkPagePosition';

const Members = ({ page, moveToPage }) => {
	const dispatch = useDispatch();
	const fetching = useSelector(store => store
		.memberships.fetching, shallowEqual);
	const selected_association_id = useSelector(store => store
		.associations.selected_association_id, shallowEqual);

	const position = checkPagePosition({
		actual_page: 2,
		selected_page: page,
	});

	useEffect(() => {
		function fetchMembers() {
			const action_via_api = api.getMemberships();
			dispatch(action_via_api);
		}

		function checkIfAlreadyLoaded() {
			const not_loaded = (
				position === 'active'
				&& fetching === 'TO_START'
				&& selected_association_id !== null
			);
			if (not_loaded) {
				fetchMembers();
			}
		}

		checkIfAlreadyLoaded();
	}, [position]);

	const loading = (
		fetching === 'TO_START'
		|| fetching === 'FETCHING'
	);
	if (loading) {
		return (
			<s.MembersPage position={position}>
				carregando membros...
			</s.MembersPage>
		);
	}

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
