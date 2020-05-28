import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRedux from '../../../tests/setupReduxTests';

// Store
import associations from '../../../store/associations/store';

// Components
import AssociationSelectedView from '../AssociationSelectedView';

describe('AssociationSelectedView', () => {
	it('should not break with blank props', async () => {
		renderWithRedux(
			<AssociationSelectedView />,
			{ initialState: { associations: {} } },
		);
	});

	it('should render null with invalid association', async () => {
		const mocked_store = {
			...associations,
			selected_association_id: '44',
		}
		const { container } = renderWithRedux(
			<AssociationSelectedView />,
			{ initialState: { associations: mocked_store } },
		);
		expect(container.firstChild).toBeNull();
	});

	it('should render the association sigla', async () => {
		const mocked_store = {
			...associations,
			by_id: {
				'10': {
					sigla: 'ACEM',
					nome: 'Associação Catarinense',
				},
			},
			all_ids: ['10'],
			selected_association_id: '10',
		}
		renderWithRedux(
			<AssociationSelectedView />,
			{ initialState: { associations: mocked_store } },
		);
		expect(screen.getByText('ACEM')).toBeInTheDocument();
	});
});
