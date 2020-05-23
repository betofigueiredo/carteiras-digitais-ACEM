import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import { Alert } from 'antd';
import * as s from './MembersErrors.style';

const MembersErrors = () => {
	const error = useSelector(store => store
		.memberships.error, shallowEqual);
	const has_error = error !== null;

	if (!has_error) {
		return null;
	}

	const error_views = {
		empty_search: (
			<s.Error>
				<Alert
					message="Busque o associado pelo número"
					type="error"
					style={{ width: '300px' }}
					showIcon
				/>
			</s.Error>
		),
		user_does_not_exist: (
			<s.Error>
				<Alert
					message="Usuário não encontrado"
					type="error"
					style={{ width: '300px' }}
					showIcon
				/>
			</s.Error>
		),
	};

	return error_views[error] || null;
};

export default MembersErrors;
