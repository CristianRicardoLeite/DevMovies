import { useEffect, useState } from "react"
import { Background, Container, Cover, Info, ContainerMovies } from "./styles"
import { useParams } from "react-router-dom"

import { getMovieCredits, getMovieSimilar, getMovieById, getMovieVideos } from '../../services/getData'

import getImages from "../../utils/getImages"
import { SpanGenres, Credits, Slider } from "../../components"


export const Detail = () => {

    const [movieVideo, setMovieVideo] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()
    const [movieById, setMovieById] = useState()

    const { id } = useParams()

    useEffect(() => {
        async function getAllData() {

            Promise.all([
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id),
                getMovieById(id),
            ])
                .then(([videos, credits, similar, movie]) => {

                    console.log({ movie, videos, credits, similar })
                    setMovieVideo(videos)
                    setMovieCredits(credits)
                    setMovieSimilar(similar)
                    setMovieById(movie)
                })
                .catch((error) => console.error(error))
        }

        getAllData()
    }, []);

    return (
        <>
            {movieById && (
                <>
                    <Background image={getImages(movieById.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movieById.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movieById.title}</h2>
                            <SpanGenres genres={movieById.genres} />
                            <p>{movieById.overview}</p>
                            <Credits credits={movieCredits} />
                        </Info>
                    </Container>
                    <ContainerMovies>
                        {movieVideo && movieVideo.map(video => (
                            <div key={video.id}>
                                <h4>{video.name}</h4>
                                <iframe src={`https://www.youtube.com/embed/${video.key}`} title='Youtube Video Player' height='500px' width='100%'>

                                </iframe>
                            </div>
                        ))}
                    </ContainerMovies>
                    {movieSimilar && <Slider info={movieSimilar} title={`Por que você assistiu ${movieById.title}`} />}
                </>
            )}
        </>
    )
}
