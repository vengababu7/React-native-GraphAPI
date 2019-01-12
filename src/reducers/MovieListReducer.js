import {
  MOVIE_FETCH_SUCCESS
} from '../actions/Type';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIE_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
