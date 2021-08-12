import {
  SEND_DONE_INGREDIENTS_TO_STORE,
} from '../actions';

const INITIAL_STATE = {
  searcResults: [],
  categoryList: [],
  inProgressRecipes: {},
};

function Mechanics(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'MODIFY_SEARCH_RESULTS':
    return { ...state, searcResults: action.payload };
  case 'GET_CATEGORY_LIST':
    return {
      ...state,
      categoryList: action.payload,
    };
  case SEND_DONE_INGREDIENTS_TO_STORE:
    return {
      ...state,
      inProgressRecipes: action.ingredients,
    };
  default:
    return state;
  }
}

export default Mechanics;
