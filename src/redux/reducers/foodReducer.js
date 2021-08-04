import { FOOD_LIST_SUCCESS, FOOD_CATEGORY_SUCCESS,
  FOOD_LIST_CATEGORY_SUCCESS, UPDATE_CATEGORY } from '../actions/foodActions';

const INITIAL_STATE = {
  foodCardsList: [],
  foodCategoriesList: [],
  selectedCategory: 'All',
};

const CARD_LENGTH = 12;
const CATEGORY_LENGTH = 5;

function foodReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FOOD_LIST_CATEGORY_SUCCESS:
  case FOOD_LIST_SUCCESS:
    return {
      ...state,
      foodCardsList: action.payload.slice(0, CARD_LENGTH),
    };
  case FOOD_CATEGORY_SUCCESS:
    return {
      ...state,
      foodCategoriesList: action.payload.slice(0, CATEGORY_LENGTH),
    };
  case UPDATE_CATEGORY:
    return { ...state, selectedCategory: action.payload };
  default:
    return state;
  }
}

export default foodReducer;
