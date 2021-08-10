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
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  switch (action.type) {
  case 'ADD_RECIPE_ONGOING':
    if (inProgress === null) {
      const obj = {
        cocktails: {
        },
        meals: {
          [action.payload]: [action.payload2],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
    } else {
      const obj = {
        ...inProgress,
        meals: {
          ...inProgress.meals,
          [action.payload]: [action.payload2],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
    }
    return state;
  case 'ADD_RECIPE_FAVORITE':
    return state;
  case 'ADD_RECIPE_DONE':
    if (doneRecipes === null) {
      localStorage.setItem('doneRecipes', JSON.stringify([action.payload]));
    } else {
      const array = [
        ...doneRecipes,
        action.payload,
      ];
      localStorage.setItem('doneRecipes', JSON.stringify(array));
    }
    return state;
  default:
    return state;
  }
};

export default recipe;

/* let inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    console.log(inProgress);
    if (inProgress === null) {
      const obj = [action.payload];
      console.log(array);
      localStorage.setItem('inProgressRecipes', JSON.stringify(array));
    } else {
      inProgress.push(action.payload);
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    } */
