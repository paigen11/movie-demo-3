import React from 'react';
import { BASE_POSTER_PATH } from '../../constants/Constants';
import './Movie.scss';

const movie = props => (
  <div className="movie-component">
      {props.poster && (
        <img src={`${BASE_POSTER_PATH}w300/${props.poster}`} alt="movie poster" className="movie-poster" />
        )}
    <div className="movie-details"> 
      <h1 className="movie-title">{props.title}</h1>
      <p className="movie-overview">{props.overview}</p>
      <p className="movie-released">{props.released}</p>
    </div>
  </div>
);

export default movie;
