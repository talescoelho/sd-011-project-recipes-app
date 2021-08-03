import {
  FETCH_INGREDIENTS,
  FETCH_INGREDIENTS_SUCCESS,
} from '../actions/IngredientsApiAction';

const INITIAL_STATE = {
  ingredient: [],
  loading: false,
};

const handleIngredients = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_INGREDIENTS:
    return {
      loading: true,
    };
  case FETCH_INGREDIENTS_SUCCESS:
    return {
      ingredient: action.payload.meals,
      loading: false,
    };
  default:
    return state;
  }
};

export default handleIngredients;
