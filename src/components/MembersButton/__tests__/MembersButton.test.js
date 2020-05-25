import React from '../../../tests/__mocks__/react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import removePropTypesAlerts from '../../../tests/removePropTypesAlerts';
import renderWithRedux from '../../../tests/setupReduxTests';

// Store
import memberships from '../../../store/memberships/store';

// Components
import MembersButton from '../MembersButton';

describe('MembersButton', () => {
	it('should not break with blank props', async () => {
		removePropTypesAlerts(jest);
		renderWithRedux(
			<MembersButton />,
			{ initialState: { memberships: {} } },
		);
	});

	it('should render button', async () => {
		const mocked_store = {
			...memberships,
			selected_association_id: null,
		}
		renderWithRedux(
			<MembersButton />,
			{ initialState: { memberships: mocked_store } },
		);
		const button = screen.getByText('Buscar associado');
		expect(button).toBeInTheDocument();
	});
});
