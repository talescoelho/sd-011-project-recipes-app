// Seta as chaves pedidas no LS ao fazer Login
export function saveTokensAndEmail(email) {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify({ email }));
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
