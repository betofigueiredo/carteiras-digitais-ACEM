import styled from 'styled-components';
import { borderRadius } from '../../styles/mixins';

export const Status = styled.div`
    position: absolute;
    top: 1px;
    left: 23px;
    width: 38px;
    height: 38px;
    padding: 9px 0 0 0;
	background: #abc0c3;
	${borderRadius('40px')}
	color: #fff;
	text-align: center;
`;
