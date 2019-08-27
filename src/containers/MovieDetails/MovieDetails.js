import React, { Component } from 'react';
import { getMovieDetailsById } from '../../services/movieAPI';

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
      movieDetails = <h3>Loading movie details now...</h3>;
    }

    if (!loading && movieInfo) {
      movieDetails = <h2>{movieInfo.id}</h2>;
    }

    return (
      <>
        <h1>Movie Details</h1>
        {movieDetails}
      </>
    );
  }
}
