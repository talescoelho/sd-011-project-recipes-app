import * as actions from '../actions';

const INITIAL_STATE = {
  allRecipes: [],
  allCategories: [],
  isFiltered: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actions.REQUEST_SUCCESS:
    return (
      {
        ...state,
        allRecipes: action.payload.allRecipes,
        isFiltered: action.payload.isFiltered,
      }
    );
  case actions.CATEGORIES_SUCCESS:
    return { ...state, allCategories: action.payload };
  default:
    return state;
  }
}
