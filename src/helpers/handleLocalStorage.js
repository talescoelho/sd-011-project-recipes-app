// Seta as chaves pedidas no LS ao fazer Login
export function saveTokensAndEmail(email) {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify({ email }));
}

export function saveInProgressFoodRecipes(id, usedIngredients) {
  let inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!inProgressRecipes) {
    inProgressRecipes = {
      cocktails: {},
      meals: {
        [id]: usedIngredients,
      },
    };
  } else {
    inProgressRecipes.meals = {
      ...inProgressRecipes.meals,
      [id]: usedIngredients,
    };
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
}

export function saveInProgressDrinkRecipes(id, usedIngredients) {
  let inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!inProgressRecipes) {
    inProgressRecipes = {
      meals: {},
      cocktails: {
        [id]: usedIngredients,
      },
    };
  } else {
    inProgressRecipes.cocktails = {
      ...inProgressRecipes.cocktails,
      [id]: usedIngredients,
    };
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
}
export function saveFavorites(recipe) {
  const getFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  if (getFavorites.some(
    (favorite) => favorite.id === recipe.id,
  )) {
    const remainingRecipes = getFavorites.filter(
      (favorite) => favorite.id !== recipe.id,
    );
    localStorage.setItem('favoriteRecipes', JSON.stringify(remainingRecipes));
  } else {
    getFavorites.push(recipe);
    localStorage.setItem('favoriteRecipes', JSON.stringify(getFavorites));
  }
}
