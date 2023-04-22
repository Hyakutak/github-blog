import styled from 'styled-components';

export const ProfileContainer = styled.article`
    background: ${(props) => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    gap: 2rem;
    padding: 2rem;
    padding-left: 2.5rem;
    position: absolute;
    top: -6.75rem;
    z-index: 2;
`;

export const ProfileAvatar = styled.section`
    position: relative;
    width: 100%;
    max-width: 9.25rem;
    max-height: 100%;
    img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`;

export const ProfileContainerInformation = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
        margin-bottom: 1rem;
        line-height: 1.625rem;
    }
`;

export const ProfileHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h2 {
        font-weight: 700;
        font-size: 1.5rem;
        color: ${(props) => props.theme['base-title']};
        line-height: 1.9375rem;
    }

    a {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        height: 1.1875rem;
        font-weight: 700;
        font-size: 0.75rem;
        text-transform: uppercase;
        text-decoration: none;
        color: ${(props) => props.theme['blue']};
        img {
            width: 0.703125rem;
            fill: ${(props) => props.theme['blue']};
        }
    }
`;

export const ProfileInfo = styled.footer`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    p {
        display: flex;
        align-items: center;
        gap: .5rem;
        color: ${(props) => props.theme['base-subtitle']};
        line-height: 1.625rem;
        img {
            width: 1.125rem;
            opacity: .5;
        }
    }
`;