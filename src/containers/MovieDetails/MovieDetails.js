import React, { Component } from 'react';
import { getMovieDetailsById } from '../../services/movieAPI';
import { BASE_BACKDROP_PATH } from '../../constants/Constants';
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
            style={{
              minWidth: '100%',
              width: '100%',
              height: 'auto',
              position: 'fixed',
              top: '83px',
              left: '0',
              zIndex: '-1',
            }}
          />
          <h2>{movieInfo.id}</h2>
        </div>
      );
    }

    return <>{movieDetails}</>;
  }
}
