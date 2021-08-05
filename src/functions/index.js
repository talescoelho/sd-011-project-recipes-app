// Verifica se a receita foi finalizada a partir do id dela no localStorage
export const verifyRecipeIsDone = (id) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  if (doneRecipes.length > 0) {
    return doneRecipes.some((recipe) => recipe.id === id);
  }
  return false;
};

// Verifica se a receita está "em progresso" a partir do id no localStorage
export const checkRecipeInProgress = (url, id) => {
  const recipeInProgress = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
  if (Object.keys(recipeInProgress).length > 0) {
    if (url.includes('comidas')) {
      return Object.keys(recipeInProgress.meals)
        .some((recipeId) => recipeId === id);
    }
    if (url.includes('bebidas')) {
      return Object.keys(recipeInProgress.cocktails)
        .some((recipeId) => recipeId === id);
    }
  }
  return false;
};

export const createLocalStorage = () => {
  const inProgress = {
    cocktails: {},
    meals: {},
  };
  const doneRecipes = [];
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
};
