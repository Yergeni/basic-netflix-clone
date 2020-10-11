// https://developers.themoviedb.org/3/getting-started
// Collection requests
const requests = {
    fetchTrending: `/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`,
    fetchTopRates: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
    fetchDocumentaryMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`,
};

export default requests;

// Images URLs
export const BackDropBaseUrl300 = 'http://image.tmdb.org/t/p/w300';
export const BackDropBaseUrl500 = 'http://image.tmdb.org/t/p/w500';
export const BackDropBaseUrlOriginal = 'http://image.tmdb.org/t/p/original';

export const PosterBaseUrl92 = 'http://image.tmdb.org/t/p/w92';
export const PosterBaseUrl154 = 'http://image.tmdb.org/t/p/w154';
export const PosterBaseUrl185 = 'http://image.tmdb.org/t/p/w185';
export const PosterBaseUrl342 = 'http://image.tmdb.org/t/p/w342';
export const PosterBaseUrlOriginal = 'http://image.tmdb.org/t/p/original';

// Netflix Logo
export const NetflixLogo = 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png';