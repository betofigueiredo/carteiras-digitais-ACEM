import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import { Button } from 'antd';

const AssociationsButton = ({ moveToPage }) => {
	const selected_association_id = useSelector(store => store
		.associations.selected_association_id, shallowEqual) || null;
	const no_association_selected = (
		selected_association_id === null
	);

	if (no_association_selected) {
		return (
			<Button type="primary" disabled>
				Ir para membros
			</Button>
		);
	}

	return (
		<Button
			type="primary"
			onClick={() => moveToPage(2)}
		>
			Ir para membros
		</Button>
	);
};

AssociationsButton.propTypes = {
	moveToPage: PropTypes.func.isRequired,
};

export default AssociationsButton;
