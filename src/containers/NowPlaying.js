import React, { Component } from 'react';
import axios from 'axios';
import { API_KEY, BASE_MOVIE_PATH } from '../constants/Constants';
import Movie from '../components/Movie';

export default class NowPlaying extends Component {
  state = {
    movies: [],
    loading: true,
    error: false,
  };
  async componentDidMount() {
    try {
      const playingMovies = await axios.get(
        `${BASE_MOVIE_PATH}now_playing${API_KEY}`,
      );
      console.log(playingMovies.data);
      this.setState({
        movies: playingMovies.data.results,
        loading: false,
      });
    } catch (err) {
      console.error(
        `Something went wrong fetching the now playing data: ${err}`,
      );
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  render() {
    const { error, loading, movies } = this.state;
    let movieInfo = null;

    if (!loading && !error && movies.length > 0) {
      movieInfo = movies.map(movie => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            poster={movie.poster_path}
            released={movie.release_date}
          />
        );
      });
    }

    if (error) {
      movieInfo = (
        <h3>
          Woops, something went wrong trying to fetch movies in theaters now.
        </h3>
      );
    }

    if (loading) {
      movieInfo = <h3>Loading movie data now...</h3>;
    }

    return (
      <>
        <h2>Movies In Theaters Now</h2>
        {movieInfo}
      </>
    );
  }
}
