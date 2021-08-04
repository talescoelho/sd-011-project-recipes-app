// Seta as chaves pedidas no LS ao fazer Login
export function saveTokensAndEmail(email) {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify({ email }));
}

export function saveInProgressFoodRecipes(id, usedIngredients) {
  const getLocalRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!getLocalRecipe) {
    const inProgressRecipes = {
      cocktails: {},
      meals: {
        [id]: usedIngredients,
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  } else {
    getLocalRecipe.meals = { ...getLocalRecipe.meals, [id]: usedIngredients };
    localStorage.setItem('inProgressRecipes', JSON.stringify(getLocalRecipe));
  }
}

export function saveInProgressDrinkRecipes(id, usedIngredients) {
  const getLocalRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!getLocalRecipe) {
    const inProgressRecipes = {
      meals: {},
      cocktails: {
        [id]: usedIngredients,
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  } else {
    getLocalRecipe.cocktails = { ...getLocalRecipe.cocktails, [id]: usedIngredients };
    localStorage.setItem('inProgressRecipes', JSON.stringify(getLocalRecipe));
  }
}
