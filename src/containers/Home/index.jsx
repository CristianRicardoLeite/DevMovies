import { useEffect, useState } from "react"
import { Background, ContentBoxLeft, ContentBoxRight } from "./styles"

import { Button, Modal, Slider } from '../../components'
import getImages from '../../utils/getImages'
import { useNavigate } from "react-router-dom"
import { homeMovie, popularPersonData, popularSeriesData, topMoviesData, topSeriesData } from "../../services/getData"


export const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [dataMovies, setDataMovies] = useState()
    const [dataTopMovies, setDataTopMovies] = useState()
    const [dataTopTv, setDataTopTv] = useState()
    const [dataPopularTv, setDataPopularTv] = useState()
    const [dataPopularPeople, setDataPopularPeople] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {

            Promise.all([
                homeMovie(),
                topMoviesData(),
                topSeriesData(),
                popularSeriesData(),
                popularPersonData()
            ])
                .then(([movie, topMovie, topSeries, popularSeries, topPerson]) => {
                    setDataMovies(movie)
                    setDataTopMovies(topMovie)
                    setDataTopTv(topSeries)
                    setDataPopularTv(popularSeries)
                    setDataPopularPeople(topPerson)
                })
                .catch((error) => console.error(error))
        }

        getAllData()
    }, []);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }


    return (
        <>
            {dataMovies && (
                <Background img={getImages(dataMovies.backdrop_path)} id="home" >
                    {showModal && <Modal movieId={dataMovies.id} setShowModal={setShowModal} />}
                    <div>
                        <ContentBoxLeft>
                            <h1 id="item1">{dataMovies.title}</h1>
                            <p id="item2">{truncate(dataMovies.overview, 200)}</p>
                            <div id="item3">
                                <Button red onClick={() => navigate(`/detalhes/${dataMovies.id}`)}>Assista agora</Button>
                                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </div>
                        </ContentBoxLeft>
                        <ContentBoxRight id="item4">
                            <img src={getImages(dataMovies.poster_path)} alt="capa-do-filme" />
                        </ContentBoxRight >
                    </div>
                </Background >
            )}
            {dataTopMovies && <Slider info={dataTopMovies} title={'Top Filmes'} id="filmes" />}
            {dataTopTv && <Slider info={dataTopTv} title={'Top Séries'} />}
            {dataPopularTv && <Slider info={dataPopularTv} title={'Séries Populares'} id='series' />}
            {dataPopularPeople && <Slider info={dataPopularPeople} title={'Artistas Renomados'} />}
        </>
    )
}
