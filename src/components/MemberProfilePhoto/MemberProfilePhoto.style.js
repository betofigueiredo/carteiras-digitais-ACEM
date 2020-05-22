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
	background-image: url(${props => props.photo_url});
	background-size: cover;
`;
