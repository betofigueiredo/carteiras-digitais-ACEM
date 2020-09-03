import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import removePropTypesAlerts from '../../../tests/removePropTypesAlerts';
import renderWithRedux from '../../../tests/setupReduxTests';

// Store
import memberships from '../../../store/memberships/store';

// Components
import Associations from '../Associations';

describe('Associations', () => {
	it('should not break with blank props', async () => {
		removePropTypesAlerts(jest);
		renderWithRedux(
			<Associations />,
			{ initialState: {} },
		);
	});

	it('should render page', async () => {
		renderWithRedux(
			<Associations />,
			{ initialState: {} },
		);
		screen.getByText('Associações');
		screen.getByText('Selecione abaixo a associação');
	});
});
