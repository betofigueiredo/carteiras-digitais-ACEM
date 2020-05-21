import React from 'react';
import PropTypes from 'prop-types';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// CSS
import { Button } from 'antd';
import * as s from './BackButton.style';

const BackButton = ({ moveToPage, page }) => {
	function navigate() {
		moveToPage(page);
	}

	return (
		<s.ButtonWrapper>
			<Button type="link" onClick={navigate}>
				<FontAwesomeIcon icon={faChevronLeft} /> Voltar
			</Button>
		</s.ButtonWrapper>
	);
};

BackButton.propTypes = {
	moveToPage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
};

export default BackButton;
