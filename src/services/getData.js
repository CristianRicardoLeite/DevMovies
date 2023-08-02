import Api from "./api";

export const homeMovie = async () => {

    const randomNumber = Math.floor(Math.random() * 20);

    const { data: { results } } = await Api.get('movie/popular');

    return results[randomNumber]
}

export const topMoviesData = async () => {
    const { data: { results } } = await Api.get('movie/top_rated');

    return results
}

export const topSeriesData = async () => {
    const { data: { results } } = await Api.get('tv/top_rated');


    return results
}

export const popularSeriesData = async () => {
    const { data: { results } } = await Api.get('tv/popular');

    return results
}

export const popularPersonData = async () => {
    const { data: { results } } = await Api.get('person/popular');

    return results
}

export const trailerMovie = async (movieId) => {
    const { data: { results } } = await Api.get(`movie/${movieId}/videos`);

    return results[0]
}

export const getMovieVideos = async (movieId) => {
    const { data: { results } } = await Api.get(`movie/${movieId}/videos`);

    return results
}

export const getMovieCredits = async (movieId) => {
    const { data: { cast } } = await Api.get(`movie/${movieId}/credits`);

    return cast
}

export const getMovieSimilar = async (movieId) => {
    const { data: { results } } = await Api.get(`movie/${movieId}/similar`);

    return results
}

export const getMovieById = async (movieId) => {
    const { data } = await Api.get(`movie/${movieId}`);

    return data
}