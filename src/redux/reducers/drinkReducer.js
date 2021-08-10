import { DRINK_LIST_SUCCESS, DRINK_CATEGORY_SUCCESS,
  DRINK_LIST_CATEGORY_SUCCESS, UPDATE_CATEGORY,
  DRINK_DETAILS_ID_SUCCESS, FOOD_RECOMENDATIONS_SUCCESS,
  DRINK_INGREDIENTS, RENDER_DRINK_INGREDIENTS } from '../actions/drinkActions';

const INITIAL_STATE = {
  drinkCardsList: [],
  drinkCategoriesList: [],
  selectedCategory: 'All',
  drinkDetails: {},
  foodRecomendations: [],
  drinkIngredients: [],
  ingredientDrinkQuery: '',
};

const CARD_LENGTH = 12;
const CATEGORY_LENGTH = 5;
const FOOD_RECOMENDATION = 6;

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
  case DRINK_DETAILS_ID_SUCCESS:
    return {
      ...state,
      drinkDetails: { ...action.payload[0] },
    };
  case FOOD_RECOMENDATIONS_SUCCESS:
    return { ...state,
      foodRecomendations: action.payload.slice(0, FOOD_RECOMENDATION) };
  case DRINK_INGREDIENTS:
    return { ...state,
      drinkIngredients: action.payload.slice(0, CARD_LENGTH) };
  case RENDER_DRINK_INGREDIENTS:
    return { ...state,
      ingredientDrinkQuery: action.payload };
  default:
    return state;
  }
}

export default drinkReducer;
