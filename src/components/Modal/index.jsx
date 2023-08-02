import React, { useEffect, useState } from 'react'
import { Container, Background } from './styles'
import Api from '../../services/api'
import { trailerMovie } from '../../services/getData'

export const Modal = ({ movieId, setShowModal }) => {
    const [dataMovies, setDataMovies] = useState()

    useEffect(() => {
        async function moviesData() {
            setDataMovies(await trailerMovie(movieId))
        }

        moviesData()
    }, [])


    return (

        <Background onClick={() => setShowModal(false)}>
            {dataMovies && (
                <Container>
                    <div>
                        <button> <img src="https://icons.iconarchive.com/icons/rafiqul-hassan/blogger/128/Close-icon.png" width="30" height="30" /> </button>
                    </div>
                    <iframe src={`https://www.youtube.com/embed/${dataMovies.key}`} title='Youtube Video Player' height='500px' width='100%'>

                    </iframe>
                </Container>
            )}

        </Background>
    )
}
