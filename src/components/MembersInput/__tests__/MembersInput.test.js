import React from '../../../tests/__mocks__/react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import removePropTypesAlerts from '../../../tests/removePropTypesAlerts';
import renderWithRedux from '../../../tests/setupReduxTests';

// Store
import memberships from '../../../store/memberships/store';

// Components
import MembersInput from '../MembersInput';

describe('MembersInput', () => {
	it('should not break with blank props', async () => {
		removePropTypesAlerts(jest);
		renderWithRedux(
			<MembersInput />,
			{ initialState: { memberships: {} } },
		);
	});

	it('should render input', async () => {
		renderWithRedux(
			<MembersInput />,
			{ initialState: { memberships } },
		);
		const input = screen.getByLabelText('search-input');
		expect(input).toBeInTheDocument();
		fireEvent.change(input, { target: { value: '100' } });
		expect(input.value).toBe('100');
	});
});
