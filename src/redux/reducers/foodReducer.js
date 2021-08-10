import { FOOD_LIST_SUCCESS, FOOD_CATEGORY_SUCCESS,
  FOOD_LIST_CATEGORY_SUCCESS, UPDATE_CATEGORY,
  FOOD_DETAILS_ID_SUCCESS, DRINK_RECOMENDATIONS_SUCCESS,
<<<<<<< Updated upstream
  FOOD_INGREDIENTS } from '../actions/foodActions';
=======
  FOOD_INGREDIENTS, FOOD_AREA, SAVE_FAVORITES,
  RENDER_FOOD_INGREDIENTS,
} from '../actions/foodActions';
>>>>>>> Stashed changes

const INITIAL_STATE = {
  foodCardsList: [],
  foodCategoriesList: [],
  selectedCategory: 'All',
  foodDetails: {},
  drinkRecomendations: [],
  foodIngredients: [],
<<<<<<< Updated upstream
=======
  foodArea: [],
  favorites: [],
  ingredientFoodQuery: '',
>>>>>>> Stashed changes
};

const CARD_LENGTH = 12;
const CATEGORY_LENGTH = 5;
const DRINK_RECOMENDATION = 6;

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
      foodDetails: { ...action.payload[0] },
    };
  case DRINK_RECOMENDATIONS_SUCCESS:
    return { ...state,
      drinkRecomendations: action.payload.slice(0, DRINK_RECOMENDATION) };
  case FOOD_INGREDIENTS:
    return { ...state,
      foodIngredients: action.payload.slice(0, CARD_LENGTH),
    };
<<<<<<< Updated upstream
=======
  case FOOD_AREA:
    return { ...state,
      foodArea: action.payload,
    };
  case SAVE_FAVORITES:
    return { ...state,
      favorites: action.payload };
  case RENDER_FOOD_INGREDIENTS:
    return { ...state,
      ingredientFoodQuery: action.payload,
    };
>>>>>>> Stashed changes
  default:
    return state;
  }
}

export default foodReducer;
