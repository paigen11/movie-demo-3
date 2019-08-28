import React from 'react';
import { NavLink } from 'react-router-dom';
import { BASE_POSTER_PATH } from '../../constants/Constants';
import './MovieList.scss';

const movie = props => (
  <NavLink to='/details'>
  <div className="movie-component">
    {props.poster && (
      <img
        src={`${BASE_POSTER_PATH}w300/${props.poster}`}
        alt="movie poster"
        className="movie-poster"
      />
    )}
    <div className="movie-details">
      <h1 className="movie-title">{props.title}</h1>
      <p className="movie-overview">
        <strong>Synopsis:</strong> {props.overview}
      </p>
      <p className="movie-released">
        <strong>Release Date:</strong> {props.released}
      </p>
    </div>
  </div>
  </NavLink>
);

export default movie;
