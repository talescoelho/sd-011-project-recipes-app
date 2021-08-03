import {
  REQUEST_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  allRecipes: [],
  isLoading: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case REQUEST_SUCCESS:
    return { ...state, allRecipes: payload };
  default:
    return state;
  }
}
