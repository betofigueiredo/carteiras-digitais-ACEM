import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import 'jest-styled-components';
import renderWithRedux from '../../../tests/setupReduxTests';
import findText from '../../../tests/findText';

// Store
import memberships from '../../../store/memberships/store';

// Components
import MembersErrors from '../MembersErrors';

describe('MembersErrors', () => {
	it('should not break with a blank memberships store', async () => {
		renderWithRedux(
			<MembersErrors />,
			{ initialState: { memberships: {} } },
		);
	});

	it('should renders empty_search error', async () => {
		const mocked_store = {
			...memberships,
			error: 'empty_search',
		};
		renderWithRedux(
			<MembersErrors />,
			{ initialState: { memberships: mocked_store } },
		);
		screen.getByText((content, node) =>
			findText(content, node, 'Busque o associado pelo número'));
	});

	it('should renders user_does_not_exist error', async () => {
		const mocked_store = {
			...memberships,
			error: 'user_does_not_exist',
		};
		renderWithRedux(
			<MembersErrors />,
			{ initialState: { memberships: mocked_store } },
		);
		screen.getByText((content, node) =>
			findText(content, node, 'Usuário não encontrado'));
	});

	it('should not render any errors', async () => {
		renderWithRedux(
			<MembersErrors />,
			{ initialState: { memberships } },
		);
		const error1 = screen.queryAllByText((content, node) =>
			findText(content, node, 'Busque o associado pelo número'));
		const error2 = screen.queryAllByText((content, node) =>
			findText(content, node, 'Usuário não encontrado'));
		expect(error1).toHaveLength(0);
		expect(error2).toHaveLength(0);
	});
});
