import React from 'react';
import PropTypes from 'prop-types';

// CSS
import * as s from './PageTransition.style';

// Functions
import { checkPagePosition } from '../../functions/checkPagePosition';

const PageTransition = ({ children, actual_page, page }) => {
	const position = checkPagePosition({
		actual_page,
		selected_page: page,
	});

	return (
		<s.TransitionWrapper position={position}>
			{React.Children.map(children, (child) => <>{child}</>)}
		</s.TransitionWrapper>
	);
};

PageTransition.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	actual_page: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
};

export default PageTransition;
