import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRedux from '../../../tests/setupReduxTests';

// Store
import associations from '../../../store/associations/store';

// Components
import AssociationsSelect from '../AssociationsSelect';

describe('AssociationsSelect', () => {
	it('should not break with blank props', async () => {
		renderWithRedux(
			<AssociationsSelect />,
			{ initialState: { associations: {} } },
		);
	});

	it('should render the combobox', async () => {
		const mocked_store = {
			...associations,
			fetching: 'LOADED',
			by_id: {
				'1': {
					sigla: 'ACEM',
					nome: 'Associação Catarinense',
				},
			},
			all_ids: ['1'],
		}
		renderWithRedux(
			<AssociationsSelect />,
			{ initialState: { associations: mocked_store } },
		);
		const combobox = screen.getByRole('combobox');
		expect(combobox).toBeInTheDocument();
		fireEvent.mouseDown(combobox);
		expect(screen.getByText('ACEM - Associação Catarinense')).toBeInTheDocument();
	});
});
