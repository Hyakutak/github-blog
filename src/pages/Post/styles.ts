import styled from 'styled-components';

export const PostContainer = styled.main`
    display: flex;
    flex-direction: column;
`;

export const PostHeader = styled.header`
    background: ${(props) => props.theme['base-profile']};
    border-radius: 10px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, .2);
    padding: 2rem;
    margin-top: -6.75rem;
    position: relative;
    z-index: 9;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.25rem;
        a {
            color: ${(props) => props.theme['blue']};
            font-size: .75rem;
            font-weight: 700;
            line-height: 1.1875rem;
            text-transform: uppercase;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: .5rem;
            img {
                width: .75rem;
            }
        }
    }
    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.9375rem;
        color: ${(props) => props.theme['base-title']};
        margin-bottom: .5rem;
    }
    section {
        display: flex;
        align-items: center;
        gap: 2rem;
        div {
            display: flex;
            align-items: center;
            gap: .5rem;
            color: ${(props) => props.theme['base-span']};
            font-size: 1rem;
            line-height: 1.625rem;
            img {
                width: 1.125rem;
                opacity: .5;
            }
        }
    }
`;

export const PostBody = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 2rem;
    gap: 1.5rem;

    p,
    a {
        line-height: 1.625rem;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme['blue']};
    }

    pre {
        width: 100%;
        code {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 1rem;
            gap: .5rem;
            border-radius: 2px;
            background-color: ${(props) => props.theme['base-post']};
            font-family: 'Fira Code';
        }
    }
`;