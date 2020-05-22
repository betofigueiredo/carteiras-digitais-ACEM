import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './MemberProfile.style';

// Components
import PageTransition from '../../components/PageTransition';
import BackButton from '../../components/BackButton';
import MemberProfilePhoto from '../../components/MemberProfilePhoto';
import MemberProfileAssociation from '../../components/MemberProfileAssociation';
import MemberProfileValidity from '../../components/MemberProfileValidity';
import MemberProfileCourses from '../../components/MemberProfileCourses';

const MemberProfile = ({ page, moveToPage }) => {
	const selected_member_id = useSelector(store => store
		.memberships.selected_member_id, shallowEqual);
	const by_id = useSelector(store => store
		.memberships.by_id, shallowEqual) || {};
	const member_info = by_id[selected_member_id] || {};

	const nome = member_info.nome || '';
	const numero = member_info.numero || '';

	return (
		<PageTransition actual_page={3} page={page}>
			<BackButton
				moveToPage={moveToPage}
				page={2}
			/>
			<MemberProfilePhoto
				member_info={member_info}
			/>
			<s.Name>{nome}</s.Name>
			<s.Number>#{numero}</s.Number>
			<s.InfoBlock>
				<MemberProfileAssociation />
			</s.InfoBlock>
			<s.InfoBlock>
				<MemberProfileValidity
					member_info={member_info}
				/>
			</s.InfoBlock>
			<s.InfoBlock>
				<MemberProfileCourses
					member_info={member_info}
				/>
			</s.InfoBlock>
		</PageTransition>
	);
};

MemberProfile.propTypes = {
	page: PropTypes.number.isRequired,
	moveToPage: PropTypes.func.isRequired,
};

export default MemberProfile;
