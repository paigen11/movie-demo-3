import React, { Component } from 'react';
import {
  BASE_BACKDROP_PATH,
  BASE_POSTER_PATH,
} from '../../constants/Constants';
import Review from '../../components/Review/Review';
import './MovieDetails.scss';

class MovieDetails extends Component {
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
      return (
        <>
          <img
            className="movie-details-backdrop"
            src={`${BASE_BACKDROP_PATH}${movieInfo.backdrop_path}`}
            alt="movie background"
          />
          <div className="movie-details-poster-wrapper">
            <img
              className="movie-details-poster"
              src={`${BASE_POSTER_PATH}/w500${movieInfo.poster_path}`}
              alt="movie poster"
            />
            <div className="movie-details-info">
              <div className="movie-details-info__overview">
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
          </div>
        </>
      );
    }
  }
}

export default MovieDetails;
