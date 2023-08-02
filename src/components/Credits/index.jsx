import React from 'react'
import { Container, Title } from './styles'
import getImages from '../../utils/getImages'

export const Credits = ({ credits }) => {

    return (
        <>
            <Title>Créditos</Title>
            {credits && (
                <Container>
                    {credits.slice(0, 5).map((artist) => (
                        <div key={artist.id}>
                            <img src={getImages(artist.profile_path)} />
                            <p>{artist.name}</p>
                        </div>
                    ))}
                </Container>
            )}
        </>
    )
}
