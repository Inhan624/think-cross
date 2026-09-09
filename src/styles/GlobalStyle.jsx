import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f7f8fa;
        color: #222;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button,
    input,
    textarea,
    select {
        font-family: Arial, sans-serif;
    }
`;





export default GlobalStyle;