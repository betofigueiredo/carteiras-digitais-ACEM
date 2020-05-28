import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRedux from '../../../tests/setupReduxTests';

// Store
import associations from '../../../store/associations/store';

// Components
import MemberProfileAssociation from '../MemberProfileAssociation';

describe('MemberProfileAssociation', () => {
	it('should not break with blank props', async () => {
		renderWithRedux(
			<MemberProfileAssociation />,
			{ initialState: { associations: {} } },
		);
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
			<MemberProfileAssociation />,
			{ initialState: { associations: mocked_store } },
		);
		expect(screen.getByText('Associado à')).toBeInTheDocument();
		expect(screen.getByText('ACEM')).toBeInTheDocument();
	});
});
