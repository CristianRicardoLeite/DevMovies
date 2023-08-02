import axios from "axios";

const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '9adc6024913cf2826af07b47fce68ffd',
        language: 'pt-BR',
        page: 1
    }
})

export default Api