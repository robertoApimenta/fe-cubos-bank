import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Courier New', Courier, monospace;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }
`;