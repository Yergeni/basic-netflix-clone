import Axios from 'axios';

const axiosInstance = Axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    // headers: {
    //     // "Authorization": process.env.REACT_APP_TMDB_ACCESS_TOKEN
    //     "Access-Control-Allow-Origin": "*"
    // }
});

export default axiosInstance;
