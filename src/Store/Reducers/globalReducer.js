import { GlobalActionTypes } from '../Constants/action-types';
const intialState = {
  reviewedMovieName: '',
  reviewedMovieCount: 0,
};
export const globalReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case GlobalActionTypes.REVIEWED_MOVIE_NAME:
      return { ...state, reviewedMovieName: payload };
    case GlobalActionTypes.INCREASE_REVIEWED_MOVIE_COUNT:
      return {
        ...state,
        reviewedMovieCount: state.reviewedMovieCount + 1,
      };
    default:
      return state;
  }
};
