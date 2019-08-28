import React, { Component } from 'react';
import { getMovieDetailsById } from '../../services/movieAPI';
import {
  BASE_BACKDROP_PATH,
  BASE_POSTER_PATH,
} from '../../constants/Constants';
import './MovieDetails.scss';

export default class MovieDetails extends Component {
  state = {
    movieInfo: null,
    loading: true,
  };

  async componentDidMount() {
    if (this.props.match.params.id) {
      const movieInfo = await getMovieDetailsById(this.props.match.params.id);
      this.setState({ loading: false, movieInfo });
      console.log(movieInfo);
    }
  }

  render() {
    const { movieInfo, loading } = this.state;

    let movieDetails = null;

    if (loading) {
      movieDetails = (
        <>
          {' '}
          <h1>Movie Details</h1>
          <h3>Loading movie details now...</h3>
        </>
      );
    }

    if (!loading && movieInfo) {
      movieDetails = (
        <div className="movie-details-wrapper">
          <h1>{movieInfo.title}</h1>
          <img
            className="movie-details-backdrop"
            src={`${BASE_BACKDROP_PATH}${movieInfo.backdrop_path}`}
            alt="movie background"
          />
          <div className="movie-details-poster-wrapper">
            <img
              className="movie-details-poster"
              src={`${BASE_POSTER_PATH}/w500/${movieInfo.poster_path}`}
              alt="movie poster"
            />
            <div className="movie-details-info">
              <h3>Movie Overview: {movieInfo.overview}</h3>
              <h3>Release Date: {movieInfo.release_date}</h3>
              <h3>Average Rating: {movieInfo.vote_average}</h3>
            </div>
          </div>
        </div>
      );
    }

    return <>{movieDetails}</>;
  }
}
