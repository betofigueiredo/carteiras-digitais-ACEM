import styled, { css } from 'styled-components';
import { borderRadius } from '../../styles/mixins';

export const Status = styled.div`
    position: absolute;
    top: 1px;
    left: 23px;
    width: 38px;
    height: 38px;
    padding: 9px 0 0 0;
	background: #ff3c57;
	${borderRadius('40px')}
	color: #fff;
	text-align: center;

	${props => props.is_valid && css`
		background: #7cd47c;
	`}
`;

export const InvalidDate = styled.span`
	color: #ff3c57;
	text-decoration: line-through;
`;
