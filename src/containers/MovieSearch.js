import React, { Component } from 'react';
import axios from 'axios';
import { API_KEY, SEARCH_MOVIE_PATH } from '../constants/Constants';
import Movie from '../components/Movie';

export default class MovieSearch extends Component {
  state = {
    value: '',
    movies: null,
    error: false,
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const movies = await axios.get(
        `${SEARCH_MOVIE_PATH}?query=${this.state.value}&${API_KEY}`,
      );
      console.log(movies.data.results);
      this.setState({ movies: movies.data.results });
    } catch (err) {
      console.error(`There was a problem finding movies: ${err}`);
      this.setState({ error: true });
    }
  };

  render() {
    const { movies, error } = this.state;

    let movieInfo = null;

    if (movies) {
      if (movies.length === 0) {
        movieInfo = (
          <h3>No movies match your search terms. Please try again.</h3>
        );
      } else if (movies.length > 0) {
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
    }

    if (error) {
      movieInfo = (
        <h3>
          Woops, something went wrong trying to find movies with titles like
          your search.
        </h3>
      );
    }

    return (
      <>
        <h2>Movie Search</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search Movie Titles Here:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {movieInfo ? movieInfo : null}
      </>
    );
  }
}
