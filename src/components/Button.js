import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    border: none;
    height: 48px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.primary.main};
    color: #fff;
    font-weight: bold;
    margin-top: 8px;
    transition: all 0.2s ease-in;

    &:hover {
        background: ${({ theme }) => theme.colors.primary.light};
    }

    &:active {
        background: ${({ theme }) => theme.colors.primary.dark};
    }

    &[disabled] {
        background: ${({ theme }) => theme.colors.gray[100]};
        cursor: default;
    }
`;