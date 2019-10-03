import React, { useState } from 'react';
import './Review.scss';

const Review = props => {
  const [expandedReview, setExpandedReview] = useState(false);

  const toggleReview = () => () => {
    setExpandedReview(!expandedReview);
  };

  return (
    <>
      {!expandedReview && (
        <>
          <div className="review-component">
            <p>
              <strong>By:{props.review.author} </strong>
              {props.review.content}
            </p>
          </div>
          <span className="mobile-review" onClick={toggleReview()}>
            Show more...
          </span>
        </>
      )}
      {expandedReview && (
        <>
          <p className="review-expanded">
            <strong>By:{props.review.author} </strong>
            {props.review.content}
          </p>
          <span className="mobile-review" onClick={toggleReview()}>
            Show less...
          </span>
        </>
      )}
    </>
  );
};

export default Review;
