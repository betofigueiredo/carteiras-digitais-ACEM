import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// CSS
import { Select } from 'antd';

// Actions
import { associationSelected } from '../../store/shared/actions';

const AssociationsSelect = () => {
	const dispatch = useDispatch();
	const associations = useSelector(store => store
		.associations, shallowEqual) || {};
	const fetching = associations.fetching || '';
	const all_ids = associations.all_ids || [];
	const by_id = associations.by_id || {};
	const style = { width: '300px' };

	function handleSelect(association_id) {
		const action = associationSelected({
			association_id,
		});
		dispatch(action);
	}

	const loading = (
		fetching === 'TO_START'
		|| fetching === 'FETCHING'
	);
	if (loading) {
		return (
			<Select style={style} loading />
		);
	}

	return (
		<Select onChange={handleSelect} style={style}>
			{all_ids.map(association_id => (
				<Select.Option
					key={association_id}
					value={association_id}
				>
					{by_id[association_id].sigla}
					{' - '}
					{by_id[association_id].nome}
				</Select.Option>
			))}
		</Select>
	);
};

export default AssociationsSelect;
