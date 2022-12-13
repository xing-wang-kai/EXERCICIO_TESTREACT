import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    html {
        font-family: 'Poppins', sans-serif;
    }
    html {
    background: #4B69FD;
    border: 2px solid black;
    font-family: 'Poppins', sans-serif;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
`