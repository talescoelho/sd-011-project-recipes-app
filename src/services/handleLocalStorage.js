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
  const inProgressRecipes = JSON
    .parse(localStorage.getItem('inProgressRecipes')) || defaultObj;
  return inProgressRecipes;
};

export const setInProgressRecipe = (selector, id, arrayOfIngredients) => {
  const inProgressRecipes = retrieveInProgressRecipes();
  inProgressRecipes[selector][id] = arrayOfIngredients;
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
};
