import styled from 'styled-components'



export const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


img{
    border-radius: 30px;
    width: 280px;
    height: 100%;

    @media (max-width: 800px) {
        width: 150px;
    }
}

h3{
margin: 15px 0;

@media (max-width: 800px) {
        font-size: .8rem;
    }
}

`