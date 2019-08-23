import React from 'react';
// import { BASE_POSTER_PATH } from '../constants/Constants';
import './Genre.scss';

const Genre = props => (
  <div key={props.id} className="genre-component" onClick={() => (props.goToGenreList(props.id))}>
    <h3 className="genre-name">{props.name}</h3>
  </div>
);

export default Genre;
