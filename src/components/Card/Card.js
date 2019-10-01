import React from 'react';
import './Card.scss';

const Card = props => (
  <>
      <div
        className="card-component"
        style={props.style || null}
        onClick={() => props.goToMovieDetails(props.movieId)}
      >
        {props.children}
      </div>
  </>
);

export default Card;
