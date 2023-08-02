import React, { useState } from 'react'

import Logo from '../../assets/logo.png'

import { Link, useLocation } from 'react-router-dom'

import { Container, Menu, Li, MenuIcon, MenuExtended, ContainerLeft, ContainerRight, LiExtended } from './styles'

export const Header = () => {

    const [menuMobile, setMenuMobile] = useState(false)
    const [menuExtendedMobile, setMenuExtendedMobile] = useState(false)
    const [colorBackground, setColorBackground] = useState(false)

    const { pathname } = useLocation()

    window.onscroll = () => {
        if (!colorBackground && window.pageYOffset > 150) {
            setColorBackground(true)
        }
        if (colorBackground && window.pageYOffset <= 150) {
            setColorBackground(false)
        }
    }


    return (
        <Container colorBackground={colorBackground}>
            <ContainerLeft>
                <img src={Logo} alt='Logo' />
            </ContainerLeft>
            <ContainerRight>
                <Menu>
                    <Li isActive={pathname === '/'}>
                        <Link to="/">Home</Link>
                    </Li>
                    <Li isActive={pathname.includes('filmes')}>
                        <Link to="/#filmes">Filmes</Link>
                    </Li>
                    <Li isActive={pathname.includes('series')}>
                        <Link to="/#series">Séries</Link>
                    </Li>
                </Menu>
                <MenuIcon onClick={() => setMenuMobile((e) => !e)}>
                    {menuMobile ? <>&#10005;</> : <>&#8801;</>}
                </MenuIcon>
                <div>
                    {menuMobile &&
                        <>
                            <MenuExtended fontsize={menuMobile}>
                                <LiExtended isActive={pathname === '/'}>
                                    <Link to="/">Home</Link>
                                </LiExtended>
                                <LiExtended isActive={pathname.includes('filmes')}>
                                    <Link to="/#filmes">Filmes</Link>
                                </LiExtended>
                                <LiExtended isActive={pathname.includes('series')}>
                                    <Link to="/#series">Séries</Link>
                                </LiExtended>
                            </MenuExtended>
                        </>}
                </div>
            </ContainerRight>

        </Container>
    )
}
