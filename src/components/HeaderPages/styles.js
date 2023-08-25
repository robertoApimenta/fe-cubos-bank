import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    img {
        rotate: 180deg;
        margin-right: 16px;
    }

    h1 {
        font-size: 30px;
        color: ${({ theme }) => theme.colors.gray[100]};
    }

    a {
        text-decoration: none;
    }
`;