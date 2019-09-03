import React from 'react';
import './Review.scss';

const Review = ({ review }) => (
  <p className="review-component">
      {review.content}
  </p>
);

export default Review;
