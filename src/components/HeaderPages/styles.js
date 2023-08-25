import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    img {
        rotate: 180deg;
        margin-right: 16px;
    }
    
    h1 {
        font-size: 32px;
        color: ${({ theme }) => theme.colors.primary.main}
    }

    a {
        text-decoration: none;
    }
`;