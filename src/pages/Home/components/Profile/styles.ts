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
    top: -13rem;
    z-index: 2;
`;

export const ProfileAvatar = styled.img`
    width: 9.25rem;
    border-radius: 8px;
`;

export const ProfileContainerInformation = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;