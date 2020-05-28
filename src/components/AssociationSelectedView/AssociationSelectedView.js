import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const AssociationSelectedView = () => {
	const selected_association_id = useSelector(store => store
		.associations.selected_association_id, shallowEqual);
	const by_id = useSelector(store => store
		.associations.by_id, shallowEqual) || {};
	const association_info = by_id[selected_association_id];

	const invalid_association = association_info === undefined;
	if (invalid_association) {
		return null;
	}

	return (
		<>{association_info.sigla}</>
	);
};

export default AssociationSelectedView;
