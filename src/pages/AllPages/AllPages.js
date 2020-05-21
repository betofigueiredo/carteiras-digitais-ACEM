import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './AllPages.style';

// Components
import Associations from '../Associations';
import Members from '../Members';
import MemberProfile from '../MemberProfile';

// Functions
import { urlUtils } from '../../functions/urlUtils';

const AllPages = ({ match, history }) => {
	const [page, setPage] = useState(1);
	const page_url_param = urlUtils.getPageFromUrl(match);
	const fetching = useSelector(store => store
		.associations.fetching, shallowEqual);

	useEffect(() => {
		setPage(page_url_param);
	}, [page_url_param]);

	function moveToPage(to) {
		const page_url = urlUtils.getUrlFromPage(to);
		history.push(page_url);
	}

	useLayoutEffect(() => {
		const init_page_not_home = (
			fetching === 'TO_START'
			&& page_url_param !== 1
		);
		if (init_page_not_home) {
			moveToPage(1);
		}
	}, []);

	return (
		<s.Wrapper>
			<s.Pages>
				<Associations
					page={page}
					moveToPage={moveToPage}
				/>
				<Members
					page={page}
					moveToPage={moveToPage}
				/>
				<MemberProfile
					page={page}
					moveToPage={moveToPage}
				/>
			</s.Pages>
		</s.Wrapper>
	);
};

AllPages.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			page: PropTypes.string,
		}),
	}).isRequired,
	history: PropTypes.shape({
		push: PropTypes.func,
	}).isRequired,
};

export default AllPages;
