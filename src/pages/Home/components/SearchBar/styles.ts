import styled from 'styled-components';

export const SearchBarContainer = styled.article`
    display: flex;
    flex-direction: column;
    gap: .75rem;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h5 {
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 1.8125rem;
            color: ${(props) => props.theme['base-subtitle']};
        }
        span {
            font-size: .875rem;
            color: ${(props) => props.theme['base-span']};
            line-height: 1.375rem;
        }
    }

    input {
        border-radius: 6px;
        background-color: ${(props) => props.theme['base-input']};
        border: 1px solid ${(props) => props.theme['base-border']};
        padding: .75rem 1rem;

        &::placeholder {
            color: ${(props) => props.theme['base-label']};
            font-size: 1rem;
            line-height: 1.625rem;
        }
    }
`;