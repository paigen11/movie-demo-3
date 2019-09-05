import React from 'react';
import './Review.scss';

const Review = ({ review }) => (
  <div className="review-component">
    <p>
      <strong>By:{review.author} </strong>
      {review.content}
    </p>
  </div>
);

export default Review;
