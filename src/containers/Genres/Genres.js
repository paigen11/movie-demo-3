import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Breakpoint } from 'react-socks';
import Genre from '../../components/Genre/Genre';
import * as movieAPI from '../../services/movieAPI';
import './Genres.scss';

export default class Genres extends Component {
  state = {
    genres: [],
    selectedGenre: 0,
    loading: true,
    error: false,
    selectedGenreName: '',
  };

  async componentDidMount() {
    try {
      const genres = await movieAPI.getAllGenres();
      this.setState({ genres, loading: false });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  }

  selectedGenreHandler = (genreId, genreName) => {
    this.setState({ selectedGenre: genreId, selectedGenreName: genreName });
  };

  renderRedirect = () => {
    if (this.state.selectedGenre !== 0 && this.state.selectedGenreName !== '') {
      return (
        <Redirect
          to={`/genres/${this.state.selectedGenreName}/${this.state.selectedGenre}`}
        />
      );
    }
  };

  render() {
    const { error, loading, genres } = this.state;
    let genreInfo = null;
    let info = null;

    if (!loading && !error && genres.length) {
      genreInfo = genres.map(genre => {
        return (
          <Genre
            key={genre.id}
            id={genre.id}
            name={genre.name}
            goToGenreList={this.selectedGenreHandler}
          />
        );
      });
    }

    if (error) {
      info = 'Woops, something went wrong trying to fetch genres.';
    }

    if (loading) {
      info = 'Loading genre data now...';
    }

    return (
      <div className="genres-page">
        <h1>Choose a Genre</h1>
        {(error || loading) && <h3 className="genre-info">{info}</h3>}
        <Breakpoint large up>
          <div className="genre-list">
            {this.renderRedirect()}
            {genreInfo}
          </div>
        </Breakpoint>
        <Breakpoint medium>
          <div className="genre-list">
            {this.renderRedirect()}
            {genreInfo}
          </div>
        </Breakpoint>
        <Breakpoint small down>
          <div className="genre-list">
            {this.renderRedirect()}
            {genreInfo}
          </div>
        </Breakpoint>
      </div>
    );
  }
}
