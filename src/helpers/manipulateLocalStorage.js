import ingredientsArrFormater from './ingredientsArrFormater';

const GET_INGREDIENTS_IN_STORAGE = JSON.parse(localStorage.getItem('inProgressRecipes'));

export const addRecipeIdInLocalStorage = (recipeType, recipeId) => {
  if (recipeType === 'meals') {
    const mealsRecipeIdObject = {
      ...GET_INGREDIENTS_IN_STORAGE,
      meals: {
        [recipeId]: [],
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(mealsRecipeIdObject));
  }
  if (recipeType === 'cocktails') {
    const cocktailsRecipeIdObject = {
      ...GET_INGREDIENTS_IN_STORAGE,
      cocktails: {
        [recipeId]: [],
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(cocktailsRecipeIdObject));
  }
};

export const addIngredientsInRecipeId = (recipe, recipeType, recipeId) => {
  const currentIngredients = ingredientsArrFormater(recipe);
  localStorage.setItem('inProgressRecipes', JSON.stringify({
    ...GET_INGREDIENTS_IN_STORAGE,
    [recipeType]: {
      ...GET_INGREDIENTS_IN_STORAGE[recipeType],
      [recipeId]: currentIngredients,
    },
  }));
  return GET_INGREDIENTS_IN_STORAGE[recipeType][recipeId];
};
