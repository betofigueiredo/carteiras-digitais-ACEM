import React from 'react';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import removePropTypesAlerts from '../../../tests/removePropTypesAlerts';

// Components
import MemberProfileCourses from '../MemberProfileCourses';

describe('MemberProfileCourses', () => {
	it('should not break with blank props', async () => {
		removePropTypesAlerts(jest);
		render(<MemberProfileCourses />);
	});

	it('should not render courses', async () => {
		const member_info = {
			cursos: '',
		};
		render(
			<MemberProfileCourses member_info={member_info} />,
		);
		expect(screen.queryByText('Cursos')).not.toBeInTheDocument();
	});

	it('should render courses', async () => {
		const member_info = {
			cursos: 'Primeiros socorros, Resgate',
		};
		render(
			<MemberProfileCourses member_info={member_info} />,
		);
		expect(screen.getByText('Cursos')).toBeInTheDocument();
		expect(screen.getByText('Primeiros socorros, Resgate')).toBeInTheDocument();
	});
});
