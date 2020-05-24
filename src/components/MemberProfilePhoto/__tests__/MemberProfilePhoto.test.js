import React from 'react';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import removePropTypesAlerts from '../../../tests/removePropTypesAlerts';

// Components
import MemberProfilePhoto from '../MemberProfilePhoto';

describe('MemberProfilePhoto', () => {
	it('should not break with blank props', async () => {
		removePropTypesAlerts(jest);
		render(<MemberProfilePhoto />);
	});

	it('should not render invalid image', async () => {
		const member_info = {
			foto: 'asdasdasd',
		};
		render(
			<MemberProfilePhoto member_info={member_info} />,
		);
		const photo = screen.getByTestId('profile-photo');
		expect(photo).toHaveStyleRule('background-image', 'url()');
	});

	it('should render image', async () => {
		const member_info = {
			foto: 'https://drive.google.com/open?id=1234',
		};
		render(
			<MemberProfilePhoto member_info={member_info} />,
		);
		const photo = screen.getByTestId('profile-photo');
		expect(photo).toHaveStyleRule('background-image', 'url(https://lh3.googleusercontent.com/d/1234=s220)');
	});
});
