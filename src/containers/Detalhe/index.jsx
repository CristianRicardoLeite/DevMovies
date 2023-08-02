import { useEffect, useState } from "react"
import { Background, Container, Cover, Info, ContainerMovies, SwiperExtended, BigContainer } from "./styles"
import { useParams } from "react-router-dom"

import { Swiper, SwiperSlide } from 'swiper/react'

import { getMovieCredits, getMovieSimilar, getMovieById, getMovieVideos } from '../../services/getData'

import getImages from "../../utils/getImages"
import { SpanGenres, Credits, Slider, Card } from "../../components"


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
        <BigContainer>
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
                            <SwiperExtended>
                                <Swiper
                                    grabCursor
                                    spaceBetween={10}
                                    slidesPerView={'auto'}
                                    className='swiper'
                                    scrollbar={false}
                                >
                                    {movieCredits.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Card item={item} />
                                        </SwiperSlide>
                                    )

                                    )}

                                </Swiper>
                            </SwiperExtended>
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
        </BigContainer>
    )
}
