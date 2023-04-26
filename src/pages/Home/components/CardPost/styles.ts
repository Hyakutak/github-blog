import styled from 'styled-components';

export const PostContainer = styled.section`
    padding: 2rem;
    background-color: ${(props) => props.theme['base-post']};
    border-radius: 10px;
    

    a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        cursor: pointer;
        header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 1rem;
            h3 {
                max-width: 16.6875rem;
                font-weight: 700;
                font-size: 1.25rem;
                line-height: 2rem;
                color: ${(props) => props.theme['base-title']};
            }
            span {
                font-size: .875rem;
                line-height: 1.375rem;
                color: ${(props) => props.theme['base-span']};
            }
        }

        p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            line-height: 1.625rem;
            color: ${(props) => props.theme['base-text']};
        }
    }
`;