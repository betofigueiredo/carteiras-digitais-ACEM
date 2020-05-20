import React, { useState } from 'react';

// CSS
import * as s from './AllPages.style';

// TODO
// Photo by eberhard grossgasteiger on Unsplash

// Components
import AssociationsSearch from '../../components/AssociationsSearch';
import MembersSearch from '../../components/MembersSearch';
import MemberProfile from '../../components/MemberProfile';

const AllPages = () => {
	const [page, setPage] = useState(1);

	return (
		<s.Wrapper>
			<s.Pages>
				<AssociationsSearch
					page={page}
					setPage={setPage}
				/>
				<MembersSearch
					page={page}
					setPage={setPage}
				/>
				<MemberProfile
					page={page}
					setPage={setPage}
				/>
			</s.Pages>
		</s.Wrapper>
	);
};

export default AllPages;
