import React from 'react';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

// CSS
import * as s from './MemberProfileAssociation.style';

// Components
import AssociationSelectedView from '../AssociationSelectedView';

const MemberProfileAssociation = () => (
	<>
		<s.Status>
			<FontAwesomeIcon icon={faIdCard} />
		</s.Status>
		<label>Associado à</label>
		<AssociationSelectedView />
	</>
);

export default MemberProfileAssociation;
