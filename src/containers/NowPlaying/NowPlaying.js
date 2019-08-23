import React, { Component } from 'react';
import MovieList from '../../components/Movie/MovieList';
import * as movieAPI from '../../services/movieAPI';
import './NowPlaying.scss';

export default class NowPlaying extends Component {
  state = {
    movies: [],
    loading: true,
    error: false,
  };

  async componentDidMount() {
    try {
      const movies = await movieAPI.getNowPlaying();
      this.setState({ movies, loading: false });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  }

  render() {
    return (
      <>
        <h2>Movies In Theaters Now</h2>
        <MovieList loading={this.state.loading} error={this.state.error} movies={this.state.movies} />
      </>
    );
  }
}
