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
import PageTransition from '../../components/PageTransition';
import BackButton from '../../components/BackButton';
import MembersInput from '../../components/MembersInput';
import MembersButton from '../../components/MembersButton';
import MembersErrors from '../../components/MembersErrors';

const Members = ({ page, moveToPage }) => {
	const dispatch = useDispatch();
	const fetching = useSelector(store => store
		.memberships.fetching, shallowEqual);
	const selected_association_id = useSelector(store => store
		.associations.selected_association_id, shallowEqual);

	const is_page_active = page === 2;

	useEffect(() => {
		function fetchMembers() {
			const action_via_api = api.getMemberships();
			dispatch(action_via_api);
		}

		function checkIfAlreadyLoaded() {
			const not_loaded = (
				is_page_active
				&& fetching === 'TO_START'
				&& selected_association_id !== null
			);
			if (not_loaded) {
				fetchMembers();
			}
		}

		checkIfAlreadyLoaded();
	}, [is_page_active]);

	useEffect(() => {
		function clearSelectedMember() {
			if (is_page_active) {
				const action = memberIdCleared();
				dispatch(action);
			}
		}

		return clearSelectedMember();
	}, [is_page_active]);

	const loading = (
		fetching === 'TO_START'
		|| fetching === 'FETCHING'
	);
	if (loading) {
		return (
			<PageTransition actual_page={2} page={page}>
				carregando membros...
			</PageTransition>
		);
	}

	// TODO mostrar nome da associação selecionada

	return (
		<PageTransition actual_page={2} page={page}>
			<BackButton
				moveToPage={moveToPage}
				page={1}
			/>
			<s.Title>Membros</s.Title>
			<p>Faça a busca usando o número do associado</p>
			<s.InputWrapper>
				<MembersInput />
			</s.InputWrapper>
			<MembersErrors />
			<MembersButton
				moveToPage={moveToPage}
				page={page}
			/>
		</PageTransition>
	);
};

Members.propTypes = {
	page: PropTypes.number.isRequired,
	moveToPage: PropTypes.func.isRequired,
};

export default Members;
