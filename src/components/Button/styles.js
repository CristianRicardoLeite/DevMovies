import styled, { css } from 'styled-components'

const buttonStyles = css`
border: 3px solid #ffffff;
background: transparent;
color: #ffffff;
border-radius: 30px;
padding: 10px 20px;
cursor: pointer;
font-size: 1.1rem;
font-weight: 500;

    &:hover{
        color: #ff0000;
        background: #ffffff;
        transition: .5s;
    }

    @media (max-width: 400px) {
        font-size: .7rem;
        padding: 7px 14px;
    }

    @media (max-width: 800px) {
        font-size: .8rem;
    }
`

export const ButtonRed = styled.button`
${buttonStyles}

background: #ff0000;
border: 4px solid transparent;
box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);



@media (min-width: 800px) {
    &:hover{
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    background: #ff0000;
    color: #ffffff;
    font-size: 1.13rem;
    transition: .5s;
}
    }
`

export const ButtonWhite = styled.button`
${buttonStyles}


`