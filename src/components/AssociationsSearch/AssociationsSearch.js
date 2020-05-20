import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// CSS
import { Button } from 'antd';
import * as s from './AssociationsSearch.style';

// Api
import api from '../../api/associationsApi';

// Functions
import { checkPagePosition } from '../../functions/checkPagePosition';

const AssociationsSearch = ({ page, setPage }) => {
	const dispatch = useDispatch();
	const associations = useSelector(store => store
		.associations, shallowEqual) || {};

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
			AssociationsSearch

			<Button type="primary" onClick={() => setPage(2)}>aaa</Button>

			{associations.all_ids.map(association_id => (
				<p key={association_id}>
					{associations.by_id[association_id].associacao}
				</p>
			))}

			<p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p>
		</s.AssociationsPage>
	);
};

AssociationsSearch.propTypes = {
	page: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};

export default AssociationsSearch;
