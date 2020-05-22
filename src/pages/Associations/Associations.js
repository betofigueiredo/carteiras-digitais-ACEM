import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// CSS
import * as s from './Associations.style';

// Api
import api from '../../api';

// Components
import PageTransition from '../../components/PageTransition';
import AssociationsSelect from '../../components/AssociationsSelect';
import AssociationsButton from '../../components/AssociationsButton';

const Associations = ({ page, moveToPage }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const action_via_api = api.getAssociations();
		dispatch(action_via_api);
	}, []);

	return (
		<PageTransition actual_page={1} page={page}>
			<s.Title>Associações</s.Title>
			<p>Selecione abaixo a associação</p>
			<s.SelectWrapper>
				<AssociationsSelect />
			</s.SelectWrapper>
			<AssociationsButton
				moveToPage={moveToPage}
			/>
		</PageTransition>
	);
};

Associations.propTypes = {
	page: PropTypes.number.isRequired,
	moveToPage: PropTypes.func.isRequired,
};

export default Associations;
