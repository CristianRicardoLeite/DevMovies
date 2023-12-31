import styled from 'styled-components'

export const Container = styled.div`
display: flex;
margin-top: 20px;
gap: 15px;

@media screen and (min-width: 350px) and (max-width: 800px) {
            display: none;
        }

    div{
        display: flex;
        flex-direction: column;
    }

    img{
        height: 180px;
    }
`


export const Title = styled.h4`
    font-size: 1.3rem;
    font-weight: 700;

    @media (max-width: 800px) {
    margin: 15px;
    }
` 