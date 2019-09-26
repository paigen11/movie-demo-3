import React from 'react';
import { Breakpoint } from 'react-socks';
import './Card.scss';

const Card = props => (
  <>
    <Breakpoint large up>
      <div
        className="card-component"
        style={props.style || null}
        onClick={() => props.goToMovieDetails(props.movieId)}
      >
        {props.children}
      </div>
    </Breakpoint>
    <Breakpoint medium down>
      <div
        className="card-component-tablet"
        style={props.style || null}
        onClick={() => props.goToMovieDetails(props.movieId)}
      >
        {props.children}
      </div>
    </Breakpoint>
  </>
);

export default Card;
