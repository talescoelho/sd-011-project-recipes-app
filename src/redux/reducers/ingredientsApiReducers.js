import { getIngredientsSuccess } from '../actions/IngredientsApiAction';

const INITIAL_STATE = {
  state: '',
};

const handleIngredients = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case getIngredientsSuccess:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default handleIngredients;
