import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// CSS
// import s from './ChooseAssociation.style';

// Api
import api from '../../api/associationsApi';

// TODO
// Photo by eberhard grossgasteiger on Unsplash

const ChooseAssociation = () => {
	const dispatch = useDispatch();
	const associations = useSelector(store => store
		.associations, shallowEqual) || {};

	useEffect(() => {
		const action_via_api = api.getAssociations();
		dispatch(action_via_api);
	}, []);

	return (
		<div>
			ChooseAssociation
			{associations.all_ids.map(association_id => (
				<p key={association_id}>
					{associations.by_id[association_id].associacao}
				</p>
			))}
		</div>
	);
};

export default ChooseAssociation;
