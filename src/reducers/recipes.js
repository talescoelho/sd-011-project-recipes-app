import {
  REQUEST_SUCCESS,
  CATEGORIES_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  allRecipes: [],
  allCategories: [],
  isFiltered: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case REQUEST_SUCCESS:
    return (
      {
        ...state,
        allRecipes: payload.allRecipes,
        isFiltered: payload.isFiltered,
      }
    );
  case CATEGORIES_SUCCESS:
    return { ...state, allCategories: payload };
  default:
    return state;
  }
}
