import React, { Component } from 'react';
import { Breakpoint } from 'react-socks';
import { withLastLocation } from 'react-router-last-location';
import { getMovieDetailsById, getMovieReviews } from '../../services/movieAPI';
import MovieDetails from './MovieDetails';
import MovieDetailsMobile from './MovieDetailsMobile';
import './MovieDetailsContainer.scss';

class MovieDetailsContainer extends Component {
  state = {
    movieInfo: null,
    movieReviews: null,
    loading: true,
    error: true
  };

  async componentDidMount() {
    if (this.props.match.params.id) {
      try {
        const movieInfo = await getMovieDetailsById(this.props.match.params.id);
        const movieReviews = await getMovieReviews(this.props.match.params.id);
        this.setState({
          loading: false,
          movieInfo,
          movieReviews,
          error: false
        });
      } catch (err) {
        this.setState({ loading: false, error: true });
      }
    }
  }

  render() {
    const { movieInfo, loading, movieReviews, error } = this.state;
    let pathname;

    if (this.props.lastLocation === null) {
      pathname = '/';
    } else {
      pathname = this.props.lastLocation.pathname;
    }

    let movieDetails = null;

    if (error) {
      movieDetails = (
        <h3>Woops, something went wrong trying to fetch movie details.</h3>
      );
    }

    if (loading) {
      movieDetails = (
        <>
          <h1>Movie Details</h1>
          <h3>Loading movie details now...</h3>
        </>
      );
    }

    if (!loading && movieInfo) {
      movieDetails = (
        <div className="movie-details-wrapper">
          <div className="movie-details-title">
            <i
              className="fa fa-chevron-left"
              onClick={() => this.props.history.push(`${pathname}`)}
              aria-hidden="true"
            />
            <h1>{movieInfo.title}</h1>
          </div>
          <Breakpoint medium down>
            <MovieDetailsMobile
              movieInfo={movieInfo}
              movieReviews={movieReviews}
            />
          </Breakpoint>
          <Breakpoint large up>
            <MovieDetails
              pathname={pathname}
              movieInfo={movieInfo}
              movieReviews={movieReviews}
            />
          </Breakpoint>
        </div>
      );
    }

    return <>{movieDetails}</>;
  }
}

export default withLastLocation(MovieDetailsContainer);
