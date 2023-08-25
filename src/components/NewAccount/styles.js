import styled from "styled-components";

export const Container = styled.div`
    .success {
        color: green;
    }

    .error {
        color: red;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.gray[100]};
    text-align: center;
    margin-bottom: 24px;
    font-size: 24px;
`;