import { DRINK_LIST_SUCCESS, DRINK_CATEGORY_SUCCESS,
  DRINK_LIST_CATEGORY_SUCCESS, UPDATE_CATEGORY } from '../actions/drinkActions';

const INITIAL_STATE = {
  drinkCardsList: [],
  drinkCategoriesList: [],
  selectedCategory: 'All',
};

const CARD_LENGTH = 12;
const CATEGORY_LENGTH = 5;

function drinkReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case DRINK_LIST_CATEGORY_SUCCESS:
  case DRINK_LIST_SUCCESS:
    return {
      ...state,
      drinkCardsList: action.payload.slice(0, CARD_LENGTH),
    };
  case DRINK_CATEGORY_SUCCESS:
    return {
      ...state,
      drinkCategoriesList: action.payload.slice(0, CATEGORY_LENGTH),
    };
  case UPDATE_CATEGORY:
    return { ...state, selectedCategory: action.payload };
  default:
    return state;
  }
}

export default drinkReducer;
