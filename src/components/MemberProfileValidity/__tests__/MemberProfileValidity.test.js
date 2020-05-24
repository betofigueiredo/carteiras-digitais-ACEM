import React from 'react';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import removePropTypesAlerts from '../../../tests/removePropTypesAlerts';
import findText from '../../../tests/findText';

// Components
import MemberProfileValidity from '../MemberProfileValidity';

describe('MemberProfileValidity', () => {
	it('should not break with blank props', async () => {
		removePropTypesAlerts(jest);
		render(<MemberProfileValidity />);
	});

	it('should renders the validity date', async () => {
		const member_info = {
			validade: '11/2021',
		};
		render(
			<MemberProfileValidity member_info={member_info} />,
		);
		screen.getByText((content, node) =>
			findText(content, node, 'Mensalidade válida até'));
		screen.getByText((content, node) =>
			findText(content, node, '11/2021'));
	});

	it('should renders valid date', async () => {
		const member_info = {
			validade: '08/2023',
		};
		render(
			<MemberProfileValidity member_info={member_info} />,
		);
		const icon = screen.getByTestId('validity-icon');
		expect(icon).toHaveStyleRule('background', '#7cd47c');
	});

	it('should renders invalid date', async () => {
		const member_info = {
			validade: '08/2019',
		};
		render(
			<MemberProfileValidity member_info={member_info} />,
		);
		const icon = screen.getByTestId('validity-icon');
		expect(icon).toHaveStyleRule('background', '#ff3c57');
	});
});
