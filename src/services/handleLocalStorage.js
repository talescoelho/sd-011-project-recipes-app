export const retrieveDoneRecipes = () => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  return doneRecipes;
};

export const saveNewDoneRecipe = (newRecipe) => {
  const recipes = retrieveDoneRecipes();
  localStorage.setItem('doneRecipes', JSON.stringify([...recipes, newRecipe]));
};

export const retrieveInProgressRecipes = () => {
  const defaultObj = {
    cocktails: {},
    meals: {},
  };
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes')) || defaultObj;
  return inProgress;
};

export const retrieveFavoriteRecipes = () => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  return favoriteRecipes;
};

export const setNewFavoriteRecipe = (obj) => {
  const favoriteRecipes = retrieveFavoriteRecipes();
  localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes, obj]));
};

export const removeFavoriteRecipe = (obj) => {
  const favoriteRecipes = retrieveFavoriteRecipes();
  const filteredFavoriteRecipes = favoriteRecipes
    .filter((el) => el === obj);
  localStorage.setItem('favoriteRecipes', JSON.stringify([...filteredFavoriteRecipes]));
};
