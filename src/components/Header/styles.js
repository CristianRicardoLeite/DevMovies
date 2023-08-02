import styled from 'styled-components'



export const Container = styled.div`
z-index: 50;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
padding: 10px;
background: ${props => props.colorBackground ? '#000' : 'transparent'};
transition: background 0.6s ease-in-out;
@media (max-width: 380px) {
    }
    @media (max-width: 600px) {
    }
    @media (max-width: 800px) {
    }
    @media (max-width: 1000px) {
    }


`

export const ContainerLeft = styled.div`
    img{
        width: 25%;

        @media (max-width: 600px) {
        width: 50%;
    }
    }
`

export const ContainerRight = styled.div`
`

export const Menu = styled.ul`
display: flex;
align-items: center;
list-style: none;
gap: 50px;

@media (max-width: 380px) {
        display: none;
    }
    @media (max-width: 600px) {
        display: none;
    }
    @media (max-width: 800px) {
        display: none;
    }
`

export const MenuIcon = styled.button`
display: none;


@media (max-width: 800px) {
    display: flex;
    justify-content: right;
    align-items: right;
    background-color: transparent;
    border: none;
    margin-left: 200px;
    font-size: x-large;
    cursor: pointer;
    width: 40px;
    :hover{
        opacity: 0.8;
        width: 32px;
    }

    :active{
        opacity: 0.5;
        width: 32px;
    }
}
`


export const Li = styled.li`
color: #ffffff;
font-weight: 600;
font-size: 1.5rem;
margin-right: 25px;
position: relative;
cursor: pointer;  

a{
    text-decoration: none;
}

&::after{
    content: '';
    height: 3px;
    width: ${props => props.isActive ? '100%' : 0};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width .4s ease-in-out;
}

&:hover::after{
    width: 100%;
}
`

export const MenuExtended = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
list-style: none;
gap: 15px;
font-size: x-large;
/* font-size: ${props => props.fontsize ? 'x-large' : 'small'}; */
`

export const LiExtended = styled.li`
color: #ffffff;
font-weight: 600;
font-size: 1.5rem;
margin-right: 120px;
position: relative;
cursor: pointer;  

a{
    text-decoration: none;
}

&::after{
    content: '';
    height: 3px;
    width: ${props => props.isActive ? '100%' : 0};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width .4s ease-in-out;
}

&:hover::after{
    width: 100%;
}
`

