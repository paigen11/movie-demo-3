import React, { Component } from 'react';
import { withLastLocation } from 'react-router-last-location';
import { Breakpoint } from 'react-socks';
import MovieList from '../../components/Movie/MovieList';
import * as movieAPI from '../../services/movieAPI';
import './Genres.scss';

class GenreList extends Component {
  state = {
    movies: [],
    loading: true,
    error: false,
  };

  async componentDidMount() {
    if (this.props.match.params) {
      try {
        const movies = await movieAPI.getMoviesByGenre(
          this.props.match.params.genreId,
        );
        this.setState({ movies, loading: false });
      } catch (err) {
        this.setState({ loading: false, error: true });
      }
    }
  }

  render() {
    const { movies, loading, error } = this.state;

    let movieGenreInfo;
    let info;

    if (error) {
      info = (
        <h3>
          Woops, something went wrong trying to fetch movies of this genre.
        </h3>
      );
    }

    if (loading) {
      info = <h3>Loading movies of this genre now...</h3>;
    }

    if (movies.length > 0 && !loading) {
      movieGenreInfo = (
        <MovieList loading={loading} error={error} movies={movies} />
      );
    }

    return (
      <>
        <div
          className="genre-search-title"
          onClick={() => this.props.history.push('/genres')}
        >
          <Breakpoint medium up>
            <div>
              <i className="fa fa-chevron-left" aria-hidden="true" />
              <p>Back to Genres</p>
            </div>
            <h1>{this.props.match.params.genreName} Movies</h1>
          </Breakpoint>
          <Breakpoint small down>
            <i className="fa fa-chevron-left" aria-hidden="true" />
            <h1>{this.props.match.params.genreName}</h1>
          </Breakpoint>
        </div>
        {info && <div className="genre-search-info">{info}</div>}
        {movieGenreInfo}
      </>
    );
  }
}

export default withLastLocation(GenreList);
