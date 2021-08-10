const NOT_FOUND_INDEX = -1;

export const getDoneRecipes = (id, dispatchFunction) => {
  const storedDoneRecipes = localStorage.getItem('doneRecipes');
  const parsedDoneRecipes = storedDoneRecipes ? JSON.parse(storedDoneRecipes) : [];
  if (parsedDoneRecipes
    .findIndex((parsedRecipe) => parsedRecipe.id === id) > NOT_FOUND_INDEX) {
    dispatchFunction(true);
  }
};

export const getStoredInProgressRecipes = (id, dispatchFunction, recipeType) => {
  const storedInProgressRecipes = localStorage.getItem('inProgressRecipes');
  const parsedInProgressRecipes = storedInProgressRecipes
    ? JSON.parse(storedInProgressRecipes)
    : { [recipeType]: [] };
  if (parsedInProgressRecipes[recipeType] && parsedInProgressRecipes[recipeType][id]) {
    dispatchFunction(true);
  }
};

export const getStoredFavorites = (id, dispatchFunction) => {
  const storedFavoriteRecipes = localStorage.getItem('favoriteRecipes');
  const parsedFavoriteRecipes = storedFavoriteRecipes
    ? JSON.parse(storedFavoriteRecipes)
    : [];
  if (parsedFavoriteRecipes
    .findIndex((parsedRecipe) => parsedRecipe.id === id) > NOT_FOUND_INDEX) {
    dispatchFunction(true);
  }
};
