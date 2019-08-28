import React, { Component } from 'react';
import MovieList from './MovieList';
import * as movieAPI from '../../services/movieAPI';
import './NowPlaying.scss';

export default class MovieDetails extends Component {
  state = {
    movies: [],
    loading: true,
    error: false,
  };

  async componentDidMount() {
    try {
      const movies = await movieAPI.getMovieDetails(this.props.movieId);
      const movies2 = await movieAPI.getMovieReviews(this.props.movieId);
      this.setState({ movies, loading: false });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  }

  render() {
    return (
      <>
      </>
    );
  }
}
