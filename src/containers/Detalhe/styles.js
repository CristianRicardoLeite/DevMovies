import styled, { keyframes } from 'styled-components'

const scale = keyframes`
from{
    transform: scale(0);
}
to{
    transform: scale(1);
}
`

export const Background = styled.div`
z-index: -10;
background-image: url(${(props) => props.image});
background-position: center;
background-size: cover;
height: 40vh;
background-repeat: no-repeat;
position: relative;

&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
}

&::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0,0,0,0) );
}

`

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
height: 100%;
max-width: 1500px;
margin-top: -110px;
`

export const Cover = styled.div`
padding: 20px;
display: flex;
align-items: flex-start;
height: 90%;
z-index: 99;

img{
    width: 300px;
    border-radius:30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} .5s linear;
}
`

export const Info = styled.div`
padding: 20px;
width: 50%;
display: flex;
align-items: flex-start;
flex-direction: column;

    h2{
        font-size: 3rem;
        font-weight: 700;
    }

    p{
        font-weight: 700;
        margin-top: 10px;
        margin-bottom: 20px;
    }
`

export const ContainerMovies = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
width: 100%;

    div{
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        width: 100%;
        height: 100%;
        margin: 50px 0;
    }

    h4{
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 10px;
    }

    iframe{
        border: none;
    }
`

// export const Container = styled.div``

// export const Container = styled.div``

// export const Container = styled.div``


