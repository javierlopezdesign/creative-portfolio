import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@200;500;700;900&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    
    }
    body{
        background: #1b1b1b;
        color: white;
    }
    button{
        font-weight: bold;
        background-color: transparent;
        font-size: 1.1rem;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        transition: all 0.5s ease;
        cursor: pointer;
        color: white;
        &:hover{
            background-color: #23d997;
        }
    }
    h1{
        font-weight: 700;
    }
    h2{
        font-size: 4rem;
        font-weight: lighter;

    }
    p{
        font-weight: 200;
        padding: 2rem 0rem;
        color: #ccc

    }
    span{
        color: #23d997;
    }
    a{
        font-size: 1.1.rem;
    }
`;

export default GlobalStyle;