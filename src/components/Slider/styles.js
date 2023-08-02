import styled from 'styled-components'

export const Container = styled.div`
width: 100vw;
padding: 0 20px;

h2{
font-size: 1.2rem;
margin: 50px 0 20px 20px;

@media (max-width: 800px) {
    display: flex;
    justify-content: center;
    font-size: 1rem;
    }
}


.swiper-wrapper{
    display: flex;
}
`