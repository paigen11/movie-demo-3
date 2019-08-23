import React from 'react';
import { BASE_POSTER_PATH } from '../../constants/Constants';
import './Movie.scss';

const movie = props => (
  <div className="movie-component">
    <h3 className="movie-title">{props.title}</h3>
    <div className="movie-details"> 
      {props.poster && (
        <img src={`${BASE_POSTER_PATH}w300/${props.poster}`} alt="movie poster" className="movie-poster" />
      )}
    <p className="movie-overview">{props.overview}</p>
    </div>
    <p className="movie-released">{props.released}</p>
  </div>
);

export default movie;
