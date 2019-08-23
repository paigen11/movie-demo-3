import React from 'react';
import './Card.scss';

const Card = props => (
  <div className="card-component"  style={props.style || null}>
      {props.children}
  </div>
);

export default Card;