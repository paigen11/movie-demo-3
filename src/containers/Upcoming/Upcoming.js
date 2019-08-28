import React, { Component } from 'react';
import MovieList from '../../components/Movie/MovieList';
import * as movieAPI from '../../services/movieAPI';
import './Upcoming.scss';

export default class Upcoming extends Component {
  state = {
    movies: [],
    loading: true,
    error: false,
  };

  async componentDidMount() {
    try {
      const movies = await movieAPI.getUpcoming();
      this.setState({ movies, loading: false });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  }

  render() {
    return (
      <>
        <h1>Upcoming Movies</h1>
        <MovieList
          loading={this.state.loading}
          error={this.state.error}
          movies={this.state.movies}
        />
      </>
    );
  }
}
