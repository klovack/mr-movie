import { Network } from "../types";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY_V3;

export interface MovieRequestEndpoints {
  fetchTrending: string;
  fetchNetflixOriginals: string;
  fetchAmazonOriginals: string;
  fetchDisneyPlusOriginals: string;
  fetchAppleTVOriginals: string;
  fetchTopRated: string;
  fetchActionMovies: string;
  fetchComedyMovies: string;
  fetchHorrorMovies: string;
  fetchRomanceMovies: string;
  fetchDocumentaries: string;
  fetchTVSeries: string;
}

const requests: MovieRequestEndpoints = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=${Network.NETFLIX}`,
  fetchAmazonOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=${Network.AMAZON}`,
  fetchDisneyPlusOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=${Network.DISNEY_PLUS}`,
  fetchAppleTVOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=${Network.APPLE_TV}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTVSeries: `/discover/tv?api_key=${API_KEY}&vote_average.gte=8`,
};

export default requests;
