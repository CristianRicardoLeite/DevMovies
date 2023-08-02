import React from 'react'
import { ButtonRed, ButtonWhite } from './styles'

export const Button = ({ children, red, ...rest }) => {

    return (
        <>
            {red ? (<ButtonRed {...rest}>{children}</ButtonRed>) : (<ButtonWhite {...rest}>{children}</ButtonWhite>)}
        </>
    )
}
