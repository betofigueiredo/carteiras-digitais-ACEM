import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import removePropTypesAlerts from '../../../tests/removePropTypesAlerts';
import renderWithRedux from '../../../tests/setupReduxTests';

// Store
import associations from '../../../store/associations/store';

// Components
import AssociationsButton from '../AssociationsButton';

describe('AssociationsButton', () => {
	it('should not break with blank props', async () => {
		removePropTypesAlerts(jest);
		renderWithRedux(
			<AssociationsButton />,
			{ initialState: { associations: {} } },
		);
	});

	it('should render disabled button', async () => {
		const mocked_store = {
			...associations,
			selected_association_id: null,
		}
		renderWithRedux(
			<AssociationsButton />,
			{ initialState: { associations: mocked_store } },
		);
		const button = screen.getByText('Buscar associados');
		expect(button).toBeDisabled();
	});

	it('should render enabled button', async () => {
		const mocked_store = {
			...associations,
			selected_association_id: '23',
		}
		renderWithRedux(
			<AssociationsButton />,
			{ initialState: { associations: mocked_store } },
		);
		const button = screen.getByText('Buscar associados');
		expect(button).toBeEnabled();
	});
});
