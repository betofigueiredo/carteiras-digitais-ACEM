import React from 'react';
import PropTypes from 'prop-types';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// CSS
import * as s from './MemberProfileCourses.style';

const MemberProfileCourses = ({ member_info = {} }) => {
	const courses = member_info.cursos || '';

	if (courses === '') {
		return null;
	}

	return (
		<>
			<s.Status>
				<FontAwesomeIcon icon={faPlus} />
			</s.Status>
			<label>Cursos</label>
			{courses}
		</>
	);
};

MemberProfileCourses.propTypes = {
	member_info: PropTypes.shape({
		validade: PropTypes.string,
	}).isRequired,
};

export default MemberProfileCourses;
