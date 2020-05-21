import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './Members.style';

// Api
import api from '../../api';

// Actions
import { memberIdCleared } from '../../store/memberships/actions';

// Components
import BackButton from '../../components/BackButton';
import MembersInput from '../../components/MembersInput';
import MembersButton from '../../components/MembersButton';

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

	useEffect(() => {
		function clearSelectedMember() {
			if (position === 'active') {
				const action = memberIdCleared();
				dispatch(action);
			}
		}

		return clearSelectedMember();
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
			<BackButton
				moveToPage={moveToPage}
				page={1}
			/>
			<s.Title>Membros</s.Title>
			<p>Faça a busca usando o número do associado</p>
			<s.InputWrapper>
				<MembersInput />
			</s.InputWrapper>
			<MembersButton moveToPage={moveToPage} page={page} />
		</s.MembersPage>
	);
};

Members.propTypes = {
	page: PropTypes.number.isRequired,
	moveToPage: PropTypes.func.isRequired,
};

export default Members;
