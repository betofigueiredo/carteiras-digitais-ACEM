import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import { transition } from '../../styles/mixins';

export const AssociationsPage = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	padding: 50px 0 0 0;
	${transition(theme.pages_transition)}

	${props => props.position === 'previous' && css`
		left: -100%;
	`}

	${props => props.position === 'active' && css`
		left: 0;
	`}

	${props => props.position === 'next' && css`
		left: 100%;
	`}
`;

export const Title = styled.h1`
	margin-bottom: 0;
	color: #274350;
	font-weight: bold;
`;

export const SelectWrapper = styled.div`
	margin: 20px 0 34px;
`;
