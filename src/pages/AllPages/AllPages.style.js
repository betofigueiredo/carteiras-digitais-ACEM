import styled from 'styled-components';
import { borderRadius, boxShadow } from '../../styles/mixins';

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
`;

export const Pages = styled.div`
	position: relative;
	display: inline-block;
	width: 450px;
	min-height: 600px;
	margin: 90px auto;
	background: #fff;
	${borderRadius('21px')}
	/* ${boxShadow('inset 0px 0px 19px 17px rgba(255,255,255,1)')} */
	overflow: hidden;
`;
