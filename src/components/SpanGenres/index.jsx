import React from 'react'
import { Container } from './styles'

export const SpanGenres = ({ genres }) => {

    return (
        <Container>
            {genres && genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
            ))}
        </Container>
    )
}
