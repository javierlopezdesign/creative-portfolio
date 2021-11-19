import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #1b1b1b;
        color: white;
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        transition: all 0.5s ease;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }
    h2{
        font-size: 4rem;
        font-weight: lighter;

    }

`;

export default GlobalStyle;