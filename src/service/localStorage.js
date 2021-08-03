export function caseFavoriteRecipesNull(comidasOuBebidas, data) {
  switch (comidasOuBebidas) {
  case 'comidas':
    localStorage.setItem('favoriteRecipes', JSON.stringify([{
      id: data[0].idMeal,
      type: 'comida',
      area: data[0].strArea,
      category: data[0].strCategory,
      alcoholicOrNot: '',
      name: data[0].strMeal,
      image: data[0].strMealThumb,
    }]));
    break;
  case 'bebidas':
    localStorage.setItem('favoriteRecipes', JSON.stringify([{
      id: data[0].idDrink,
      type: 'bebida',
      area: '',
      category: data[0].strCategory,
      alcoholicOrNot: data[0].strAlcoholic,
      name: data[0].strDrink,
      image: data[0].strDrinkThumb,
    }]));
    break;
  default:
    break;
  }
}

export function caseRemoveFavorite(favorited, id) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favorited) {
    const deleteFavorite = favoriteRecipes.filter((recipe) => (recipe.id !== id));
    console.log(deleteFavorite);
    return localStorage.setItem('favoriteRecipes', JSON.stringify(deleteFavorite));
  }
}
