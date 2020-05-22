import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

// CSS
import * as s from './MemberProfileAssociation.style';

const MemberProfileAssociation = () => {
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
		<>
			<s.Status>
				<FontAwesomeIcon icon={faIdCard} />
			</s.Status>
			<label>Associado à</label>
			{association_info.sigla}
		</>
	);
};

export default MemberProfileAssociation;
