export const REQUEST_RANDOM_RECIPE = 'REQUEST_RANDOM_RECIPE';
export const requestRandomRecipe = () => ({ type: REQUEST_RANDOM_RECIPE });

export const REQUEST_SUCESS_RANDOM_RECIPES = 'REQUEST_SUCESS_RANDOM_RECIPES';
export const requestRandomSucessRecipes = (payload) => ({
  type: REQUEST_SUCESS_RANDOM_RECIPES,
  payload });