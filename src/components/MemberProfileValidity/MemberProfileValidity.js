import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// CSS
import * as s from './MemberProfileValidity.style';

const MemberProfileValidity = ({ member_info = {} }) => {
	const validade = member_info.validade || '';

	function checkValidity() {
		const split_values = validade.split('/');
		const english_format = `${split_values[1]}-${split_values[0]}-01`;
		return moment().isSameOrBefore(english_format, 'month');
	}

	if (validade === '') {
		return null;
	}

	const is_valid = checkValidity();
	const icon = is_valid
		? <FontAwesomeIcon icon={faCheck} />
		: <FontAwesomeIcon icon={faTimes} />;
	const validity_view = is_valid
		? validade
		: <s.InvalidDate>{validade}</s.InvalidDate>;

	return (
		<>
			<s.Status
				is_valid={is_valid}
				data-testid="validity-icon"
			>
				{icon}
			</s.Status>
			<label>Mensalidade válida até</label>
			{validity_view}
		</>
	);
};

MemberProfileValidity.propTypes = {
	member_info: PropTypes.shape({
		validade: PropTypes.string,
	}).isRequired,
};

export default MemberProfileValidity;
