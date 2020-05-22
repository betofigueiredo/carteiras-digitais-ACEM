import React from 'react';
import PropTypes from 'prop-types';

// CSS
import * as s from './MemberProfilePhoto.style';

const MemberProfilePhoto = ({ member_info = {} }) => {
	const photo = member_info.foto || '';
	const photo_id = photo.split('id=')[1] || '';
	const public_photo_url = photo !== ''
		? `https://lh3.googleusercontent.com/d/${photo_id}=s220`
		: '';

	return (
		<s.PhotoWrapper>
			<s.Photo photo_url={public_photo_url} />
		</s.PhotoWrapper>
	);
};

MemberProfilePhoto.propTypes = {
	member_info: PropTypes.shape({
		validade: PropTypes.string,
	}).isRequired,
};

export default MemberProfilePhoto;
