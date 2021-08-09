const INITIAL_STATE = {
  currentRecipes: {
    meals: {
    },
    cocktails: [],
  },
  doneRecipes: [],
  favoriteRecipes: [],
};

const recipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_RECIPE_ONGOING':
    return {
      ...state,
      currentRecipes: {
        ...state.currentRecipes,
        meals: {
          ...state.currentRecipes.meals,
          [action.payload]: [action.payload2],
        },
      },
    };
  case 'ADD_RECIPE_FAVORITE':
    return {
      ...state,
      favoriteRecipes: [...state.favoriteRecipes, action.payload],
    };
  case 'ADD_RECIPE_DONE':
    return {
      ...state,
      favoriteRecipes: [...state.doneRecipes, action.payload],
    };
  default:
    return state;
  }
};

export default recipe;

// let inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
//  console.log(inProgress);
// if (inProgress === null) {
// const obj = [action.payload];
// console.log(array);
// localStorage.setItem('inProgressRecipes', JSON.stringify(array));
// } else {
// inProgress.push(action.payload);
// localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
// }
