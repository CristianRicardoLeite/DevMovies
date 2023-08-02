import styled from 'styled-components'

export const Background = styled.div`
z-index: 999;
height: 100vh;
width: 100vw;
background-color: rgba(0,0,0,0.7);
position: absolute;
display: flex;
justify-content: center;
align-items: center;

`

export const Container = styled.div`
z-index: 1000;
background: #000;
width: 70%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
max-width: 1200px;

div{
        position: absolute;
        top: -40px;
        right: -35px;

    }

    button{
        background: #000;
        border: none;
        cursor: pointer;
    }


iframe{
    border: none;
}
`



