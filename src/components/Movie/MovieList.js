import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Movie from './Movie';
import Card from '../Card/Card';
import './MovieList.scss';

export default class MovieList extends Component {
  state = {
    id: null,
    movieDetails: false,
  };

  selectedMovieHandler = movieId => {
    console.log(movieId);
    if (movieId !== null) {
      this.setState({ id: movieId, movieDetails: true });
    }
  };

  render() {
    const { error, loading, movies } = this.props;
    const { movieDetails, id } = this.state;
    let movieInfo = null;

    if (!loading && !error && movies.length > 0) {
      movieInfo = movies.map(movie => {
        return (
          <Card
            key={movie.id}
            movieId={movie.id}
            goToMovieDetails={this.selectedMovieHandler}
          >
            <Movie
              title={movie.title}
              overview={movie.overview}
              poster={movie.poster_path}
              released={movie.release_date}
            />
          </Card>
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

    if (movieDetails) {
      return <Redirect to={`/movie/${id}`} />;
    }

    return <div className="movie-list">{movieInfo}</div>;
  }
}
