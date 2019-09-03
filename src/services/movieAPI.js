import axios from 'axios';

export const API_KEY = 'api_key=fec8b5ab27b292a68294261bb21b04a5';
export const BASE_MOVIE_PATH = 'http://api.themoviedb.org/3/movie/';
export const SEARCH_MOVIE_PATH = 'https://api.themoviedb.org/3/search/movie';
export const BASE_URL_PATH = 'http://api.themoviedb.org/3/';
export const BASE_POSTER_PATH = 'http://image.tmdb.org/t/p/';

export let genres = [];

export const getAllGenres = async () => {
  if (genres.length) {
    return genres;
  }

  try {
    const response = await axios.get(
      `${BASE_URL_PATH}genre/movie/list?${API_KEY}`,
    );
    genres = response.data.genres;
    console.log(genres);
    return genres;
  } catch (err) {
    console.error(`Something went wrong fetching the now playing data: ${err}`);
    throw err;
  }
};

export const getMoviesByGenre = async genreId => {
  try {
    const response = await axios.get(
      `${BASE_URL_PATH}discover/movie?${API_KEY}&with_genres=${genreId}`,
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (err) {
    console.error(`Something went wrong fetching the now playing data: ${err}`);
    throw err;
  }
};

export const getNowPlaying = async () => {
  try {
    const response = await axios.get(
      `${BASE_MOVIE_PATH}now_playing?${API_KEY}`,
    );
    console.log(response.data);
    return response.data.results;
  } catch (err) {
    console.error(`Something went wrong fetching the now playing data: ${err}`);
    throw err;
  }
};

export const getUpcoming = async () => {
  try {
    const response = await axios.get(`${BASE_MOVIE_PATH}upcoming?${API_KEY}`);
    console.log(response.data);
    return response.data.results;
  } catch (err) {
    console.error(`Something went wrong fetching the now playing data: ${err}`);
    throw err;
  }
};

export const getMovieReviews = async movieId =>{
  try {
      const response = await axios.get(`${BASE_MOVIE_PATH}${movieId}/reviews?${API_KEY}`);
      console.log('reviews', response.data.results);
      return response.data.results;
    } catch (err) {
      console.error(`There was a problem finding movies: ${err}`);
      throw err;
    }
}

export const searchMovies = async searchInput => {
  try {
    const response = await axios.get(
      `${SEARCH_MOVIE_PATH}?query=${searchInput}&${API_KEY}`,
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (err) {
    console.error(`There was a problem finding movies: ${err}`);
    throw err;
  }
};

export const getMovieDetailsById = async movieId => {
  try {
    const response = await axios.get(`${BASE_MOVIE_PATH}${movieId}?${API_KEY}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(
      `There was a problem finding the details of this movie: ${err}`,
    );
    throw err;
  }
};
