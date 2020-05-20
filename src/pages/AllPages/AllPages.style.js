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
	width: 475px;
	min-height: 500px;
	margin: 50px auto;
	background: #fff;
	${borderRadius('18px')}
	${boxShadow('0 4px 49px rgba(190, 196, 214, 0.18)')}
	overflow: hidden;
`;
