import { FOOD_LIST_SUCCESS, FOOD_CATEGORY_SUCCESS,
  FOOD_LIST_CATEGORY_SUCCESS, UPDATE_CATEGORY, FOOD_DETAILS_ID_SUCCESS } from '../actions/foodActions';

const INITIAL_STATE = {
  foodCardsList: [],
  foodCategoriesList: [],
  selectedCategory: 'All',
  foodDetails: {},
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
  case FOOD_DETAILS_ID_SUCCESS:
    return {
      ...state,
      foodDetails: { ...action.payload[0] }
    }
  default:
    return state;
  }
}

export default foodReducer;
