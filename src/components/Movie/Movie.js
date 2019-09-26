import React from 'react';
import { Breakpoint } from 'react-socks';
import { BASE_POSTER_PATH } from '../../constants/Constants';
import './MovieList.scss';

const movie = props => (
  <>
    <Breakpoint medium up>
      <div className="movie-component">
        {props.poster && (
          <img
            src={`${BASE_POSTER_PATH}/w300${props.poster}`}
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
    </Breakpoint>
    <Breakpoint small down>
      <div className="movie-component-mobile">
        <h1 className="movie-title">{props.title}</h1>
        {props.poster && (
          <img
            src={`${BASE_POSTER_PATH}/w300${props.poster}`}
            alt="movie poster"
            className="movie-poster"
          />
        )}
        <div className="movie-details">
          <p className="movie-overview">
            <strong>Synopsis:</strong> {props.overview}
          </p>
          <p className="movie-released">
            <strong>Release Date:</strong> {props.released}
          </p>
        </div>
      </div>
    </Breakpoint>
  </>
);

export default movie;
