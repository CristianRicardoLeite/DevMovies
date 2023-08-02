import styled from 'styled-components'

export const Container = styled.div`
z-index: 999;
display: flex;
margin-top:30px;
gap: 10px;

@media screen and (min-width: 350px) and (max-width: 800px) {
            justify-content: center;
            align-items: center;
            margin-left: -50px;
            margin-bottom: 5px;
        }


    span{
        padding: 8px 18px;
        border: 2px solid #ffffff;
        border-radius: 30px;
        font-size: .9rem;
        font-weight: 600;
        background-color: #0f0f0f;
        display: flex;
        align-items: center;
        justify-content:center;

        @media screen and (min-width: 350px) and (max-width: 800px) {
            font-size: .6rem;
            margin-right: 5px;
            gap: 5px;
            justify-content: center;
            align-items: center;
        }
    }
`
