const INITIAL_STATE = {
  ingredient: '',
};

const recipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_INGREDIENT':
    return {
      ...state,
      ingredient: action.ingredient,
    };
  default:
    return state;
  }
};

export default recipes;
