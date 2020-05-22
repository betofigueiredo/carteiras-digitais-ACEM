import styled from 'styled-components';

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
