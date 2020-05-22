import styled from 'styled-components';
import { borderRadius } from '../../styles/mixins';

export const PhotoWrapper = styled.div`
	width: 100%;
	margin: 0;
	text-align: center;
`;

export const Photo = styled.div`
	width: 140px;
	height: 140px;
	margin: 40px auto 12px;
	background: #eee;
	${borderRadius('140px')}
`;

export const Name = styled.h1`
	margin-bottom: 5px;
	color: #274350;
	font-weight: bold;
`;

export const Number = styled.div`
	margin-bottom: 0;
	font-size: 16px;
`;

export const InfoBlock = styled.div`
	position: relative;
	width: 300px;
	margin: 25px auto;
	padding: 0 0 0 80px;
	text-align: left;
	color: #274350;
	font-size: 18px;
	font-weight: bold;
	line-height: 1.3;

	> label {
		display: block;
		color: rgba(0, 0, 0, 0.65);
		font-size: 16px;
		font-weight: normal;
	}
`;
