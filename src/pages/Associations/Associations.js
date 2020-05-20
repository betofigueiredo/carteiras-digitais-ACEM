import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// CSS
import * as s from './Associations.style';

// Api
import api from '../../api';

// Components
import AssociationsSelect from '../../components/AssociationsSelect';
import AssociationsButton from '../../components/AssociationsButton';

// Functions
import { checkPagePosition } from '../../functions/checkPagePosition';

const Associations = ({ page, moveToPage }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const action_via_api = api.getAssociations();
		dispatch(action_via_api);
	}, []);

	const position = checkPagePosition({
		actual_page: 1,
		selected_page: page,
	});

	return (
		<s.AssociationsPage position={position}>
			Associations

			<div>
				<AssociationsSelect />
			</div>

			<AssociationsButton
				moveToPage={moveToPage}
			/>
		</s.AssociationsPage>
	);
};

Associations.propTypes = {
	page: PropTypes.number.isRequired,
	moveToPage: PropTypes.func.isRequired,
};

export default Associations;
