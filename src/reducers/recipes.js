import * as actions from '../actions';

const INITIAL_STATE = {
  allRecipes: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actions.REQUEST_BY_INGREDIENT_SUCCESS:
    return { ...state, allRecipes: action.payload };
  case actions.REQUEST_BY_NAME_SUCCESS:
    return { ...state, allRecipes: action.payload };
  case action.REQUEST_BY_LETTER_SUCCESS:
    return { ...state, allRecipes: action.payload };
  default:
    return state;
  }
}
