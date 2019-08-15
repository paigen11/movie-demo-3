import React from 'react';
import { BASE_POSTER_PATH } from '../constants/Constants';

const movie = props => (
  <div>
    <h3>{props.title}</h3>
    <p>{props.overview}</p>
    <img src={`${BASE_POSTER_PATH}w300/${props.poster}`} alt="movie poster" />
    <p>{props.released}</p>
  </div>
);

export default movie;
