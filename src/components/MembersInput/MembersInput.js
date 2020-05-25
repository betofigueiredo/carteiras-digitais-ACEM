import React from 'react';
import { useDispatch } from 'react-redux';

// CSS
import { Input } from 'antd';

// Actions
import {
	searchInputChanged,
	memberSelected,
} from '../../store/memberships/actions';

const MembersInput = () => {
	const dispatch = useDispatch();

	function handleSearch(e) {
		const value = e?.target?.value || '';
		const action = searchInputChanged({ value });
		dispatch(action);
	}

	function selectMember() {
		const action = memberSelected();
		dispatch(action);
	}

	return (
		<Input
			aria-label="search-input"
			onChange={handleSearch}
			onPressEnter={selectMember}
		/>
	);
};

export default MembersInput;
