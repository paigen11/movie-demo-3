import React, { Component } from 'react';
import MovieList from '../../components/Movie/MovieList';
import * as movieAPI from '../../services/movieAPI';

export default class GenreList extends Component {
  state = {
    movies: [],
    loading: true,
    error: false,
  };
  async componentDidMount() {
    try {
      const movies = await movieAPI.getMoviesByGenre(this.props.genreId);
      this.setState({ movies, loading: false });
    } catch (err) {
      console.log('here')
      this.setState({ loading: false, error: true });
    }
  }

  render() {

    return (
      <>
        <h2>Movies for the selected genre</h2>
        <MovieList loading={this.state.loading} error={this.state.error} movies={this.state.movies} />
      </>
    );
  }
}
