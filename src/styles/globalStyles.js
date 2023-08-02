import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    color: white;

    &::-webkit-scrollbar { 
        display: none;
    }
    

    body{
        background: #000000;
    }
}

`