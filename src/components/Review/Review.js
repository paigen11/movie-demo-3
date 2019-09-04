import React from 'react';
import './Review.scss';

const Review = ({ review }) => (
  <div className="review-component" style={{ marginTop: '30px' }}>
    <p>
      <strong>By:{review.author} </strong>
      {review.content}
    </p>
  </div>
);

export default Review;
