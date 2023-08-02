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
background-image: url(${props => props.img});
background-position: center;
height: 100vh;
width: 100vw;
background-size: cover;
z-index: -15;
display: flex;
justify-content: center;
align-items: center;


    &::before{
        content: '';
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
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

    div{
        display: flex;
        padding: 4rem;
        justify-content: space-around;
        align-items: center;
        max-width: 1500px;

        @media (max-width: 800px) {
        display: grid;
        padding: 1rem;
        width: auto;
        #grid {
            display: grid;
            grid-template: repeat(4, 1fr)
        }

        #item1 {
            grid-area: 2
        }

        #item2 {
            grid-area: 3
        }

        #item3 {
            grid-area: 4
        }

        #item4 {
            grid-area: 1;
        }

    }
    }
`

export const ContentBoxLeft = styled.div`
z-index: 10;
display: flex;
flex-direction: column;
justify-content: center;
width:50%;
align-items: center;
gap: 14px;
animation: ${scale} .5s linear;

    div{
        @media (max-width: 800px) {
        display: flex;
        flex-direction: row;
    }
    }

@media (max-width: 800px) {
gap: 5px;
    }

 h1{
    font-size: 3rem;
    font-weight: 700;

    @media (max-width: 800px) {
        font-size: 1.5rem;
        text-align: center;
    }
 }

 p{
    font-size: 20px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 20px; 

    @media (max-width: 800px) {
        justify-content: center;
        margin-top: 5px;
        align-items: center;
        font-size: .8rem;
        text-align: center;
    }
}
    
 div{
    gap: 20px;

    @media (max-width: 800px) {
        gap: 5px;
    }
 }

`

export const ContentBoxRight = styled.div`
display: flex;


 img{
   z-index: 40;
    width: 400px;   
    border-radius: 30px;
    -webkit-box-shadow: -18px 8px 46px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -18px 8px 46px 0px rgba(0,0,0,0.75);
    box-shadow: -18px 8px 46px 0px rgba(0,0,0,0.75);
    animation: ${scale} .5s linear;



      @media (min-width: 800px) {
        &:hover{
      width: 410px;
      transition: .5s;
    }
    }

    @media (max-width: 800px) {
        margin-top: 50px;
        width: 200px;
    }
 }
`