import styled from 'styled-components';

export const MainContainer = styled.main`
    position: relative;
    padding: 12.25rem 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const MainContainerPosts = styled.article`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
`;