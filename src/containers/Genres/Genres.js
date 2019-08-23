import React, { Component } from 'react';
import GenreList from './GenreList';
import Genre from '../../components/Genre/Genre';
import * as movieAPI from '../../services/movieAPI';
import './Genres.scss';

export default class Genres extends Component {
  state = {
    genres: [],
    selectedGenre: 0,
    loading: true,
    error: false,
  };
  async componentDidMount() {
    try{
      const genres = await movieAPI.getAllGenres();
      this.setState({ genres, loading: false });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  }

  goToGenreList = (genreId) => {
      console.log('genreId', genreId)
      this.setState({selectedGenre: genreId});
  }

  render() {
    const { error, loading, genres } = this.state;
    let genreInfo = null;

    if (!loading && !error && genres.length) {
      genreInfo = genres.map(genre => {
        return (
          <Genre key={genre.id} id={genre.id} name ={genre.name} goToGenreList={this.goToGenreList}/>
        );
      });
    }

    if (error) {
      genreInfo = (
        <h3>
          Woops, something went wrong trying to fetch genres.
        </h3>
      );
    }

    if (loading) {
      genreInfo = <h3>Loading genre data now...</h3>;
    }

    return (
      <>{this.state.selectedGenre === 0 ?
        (<>
          <h2>Choose a Genre</h2>
          <div className="genre-list">
            {genreInfo}
          </div>
        </>) : (<GenreList genreId={this.state.selectedGenre} />)
        }
      </>
    );
  }
}
