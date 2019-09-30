import React, { Component } from 'react';
import { BASE_POSTER_PATH } from '../../constants/Constants';
import Review from '../../components/Review/Review';
import './SmallMovieDetails.scss';

class SmallMovieDetails extends Component {

  render() {
    const { movieInfo, movieReviews } = this.props;
    let reviews;
    let otherReviews;

    if (movieReviews && movieReviews.length > 2) {
      const prevReviews = movieReviews.slice(0, 2);
      otherReviews = movieReviews.length - 2;
      reviews = prevReviews.map(review => {
        return (
          <Review key={review.id} author={review.author} review={review} />
        );
      });
    } else if (movieReviews && movieReviews.length < 2) {
      reviews = movieReviews.map(review => {
        return (
          <Review key={review.id} author={review.author} review={review} />
        );
      });
    }


    if (movieInfo) {
      return (<>
        <div className="movie-details-title">
            <h1>{movieInfo.title}</h1>
        </div>
        <img
        className="movie-details-backdrop"
        src={`${BASE_POSTER_PATH}/w500${movieInfo.poster_path}`}
        alt="movie background"
        />
        <div className="movie-details-info">
            <div>
            <strong>Movie Overview:</strong> {movieInfo.overview}
            </div>
            <div>
            <strong>Release Date:</strong> {movieInfo.release_date}
            </div>
            <div>
            <strong>Average Rating:</strong> {movieInfo.vote_average}
            </div>
        </div>
        {reviews && reviews.length > 0 && (
            <div className="movie-details-reviews">
            <strong>Reviews:</strong>
            {reviews}
            {otherReviews && (
                <p>
                {otherReviews} additional
                {otherReviews === 1 ? ' review' : ' reviews'} not shown here
                </p>
            )}
            </div>
        )}
        </>
      );
    }
  }
}

export default SmallMovieDetails;
