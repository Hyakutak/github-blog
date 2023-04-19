import styled from 'styled-components';
import BackgroundHeader from '../../assets/BackgroundHeader.svg';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        padding-top: 4rem;
        padding-bottom: 8.375rem;
        position: relative;
        z-index: 2;
    }

    &::before {
        content: '';
        width: 100%;
        height: 18.5rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1; 
        background: url(${BackgroundHeader});
    }
`;