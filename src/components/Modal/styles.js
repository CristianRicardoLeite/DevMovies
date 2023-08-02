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

@media (max-width: 800px) {
    background-color: transparent;
}

`

export const Container = styled.div`
z-index: 1000;
background: #000;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
max-width: 1200px;

@media (max-width: 400px) {
    height: 300px;
    position: absolute;
    top: 150px;
    left: -180px;
}

@media screen and (min-width: 401px) and (max-width: 800px) {
    height: 300px;
    position: absolute;
    top: 150px;
    left: -190px;
}

div{
        position: absolute;
        top: -40px;
        right: -35px;

        @media (max-width: 800px) {
            position: static;
            width: 100vw;
            height: 20px;
}

    }

    button{
        background: #000;
        border: none;
        cursor: pointer;

        @media (max-width: 800px) {
            position: absolute;
            top: 30px;
            right: 50px;
}
    }


iframe{
    border: none;

    @media (max-width: 800px) {
        align-items: center;
        width: 100vw;
        height: 200px;
    }
}
`



