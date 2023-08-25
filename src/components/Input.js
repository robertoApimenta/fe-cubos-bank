import styled from "styled-components";


export const Input = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 16px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    outline: none;
    border: 2px solid #fff;
    transition: all 0.2s ease-in;

    &:focus {
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
    }
`;