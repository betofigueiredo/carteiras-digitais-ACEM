import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
`;

export const Pages = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	max-width: 450px;
	min-height: 600px;
	margin: 10px auto;
	background: #fff;
	overflow: hidden;

	@media (min-width: 768px) {
		margin: 40px auto;
	}
`;
