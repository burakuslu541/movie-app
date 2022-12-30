import { GlobalActionTypes } from '../Constants/action-types';

export const reviewedMovieName = (movieName) => {
  return {
    type: GlobalActionTypes.REVIEWED_MOVIE_NAME,
    payload: movieName,
  };
};
export const increaseReviewedMovieCount = () => {
  return {
    type: GlobalActionTypes.INCREASE_REVIEWED_MOVIE_COUNT,
  };
};
