import React, { Component } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL_PATH } from '../../constants/Constants';
import GenreList from './GenreList';
import Genre from '../../components/Genre/Genre';
import './Genres.scss';

export default class Genres extends Component {
  state = {
    genres: [],
    selectedGenre: 0,
    loading: true,
    error: false,
  };
  async componentDidMount() {
    try {
      const genres = await axios.get(
        `${BASE_URL_PATH}genre/movie/list?${API_KEY}`,
      );
      this.setState({
        genres: genres.data.genres,
        loading: false,
      });
    } catch (err) {
      console.error(
        `Something went wrong fetching the now playing data: ${err}`,
      );
      this.setState({
        loading: false,
        error: true,
      });
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
      genreInfo = genres.map(movie => {
        return (
          <Genre id={movie.id} name ={movie.name} goToGenreList={this.goToGenreList}/>
        );
      });
    }

    if (error) {
      genreInfo = (
        <h3>
          Woops, something went wrong trying to fetch genres in theaters now.
        </h3>
      );
    }

    if (loading) {
      genreInfo = <h3>Loading movie data now...</h3>;
    }

    return (
        <>{this.state.selectedGenre === 0 ?
            (<> <h2>Choose a Genre</h2>
                <div className="genre-list">
            {genreInfo}
        </div></>): (<GenreList genreId={this.state.selectedGenre} />)
            }
      </>
    );
  }
}
