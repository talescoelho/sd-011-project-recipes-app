export function setFavoriteMealInLocalStorage(object) {
  const { idMeal, strArea, strCategory, strMeal, strMealThumb } = object;
  const getFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const currentRecipe = {
    id: idMeal,
    type: 'comida',
    area: strArea,
    category: strCategory,
    alcoholicOrNot: '',
    name: strMeal,
    image: strMealThumb,
  };
  if (getFavoriteRecipes) {
    const isRecipeFavorited = getFavoriteRecipes
      .some((recipe) => recipe.id === idMeal);
    if (isRecipeFavorited === true && getFavoriteRecipes !== []) {
      const filterFavoriteRecipes = getFavoriteRecipes
        .filter((recipe) => recipe.id !== idMeal);
      localStorage.setItem('favoriteRecipes', JSON.stringify(filterFavoriteRecipes));
    }
    if (!isRecipeFavorited) {
      getFavoriteRecipes.push(currentRecipe);
      localStorage.setItem('favoriteRecipes', JSON.stringify(getFavoriteRecipes));
    }
  } else if (!getFavoriteRecipes || getFavoriteRecipes === []) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([currentRecipe]));
  }
}

export function setFavoriteDrinkInLocalStorage(object) {
  const { idDrink, strAlcoholic, strCategory, strDrink, strDrinkThumb } = object;
  const getFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const currentRecipe = {
    id: idDrink,
    type: 'bebida',
    area: '',
    category: strCategory,
    alcoholicOrNot: strAlcoholic,
    name: strDrink,
    image: strDrinkThumb,
  };
  if (getFavoriteRecipes) {
    const isRecipeFavorited = getFavoriteRecipes
      .some((recipe) => recipe.id === idDrink);
    if (isRecipeFavorited === true && getFavoriteRecipes !== []) {
      const filterFavoriteRecipes = getFavoriteRecipes
        .filter((recipe) => recipe.id !== idDrink);
      localStorage.setItem('favoriteRecipes', JSON.stringify(filterFavoriteRecipes));
    }
    if (!isRecipeFavorited) {
      getFavoriteRecipes.push(currentRecipe);
      localStorage.setItem('favoriteRecipes', JSON.stringify(getFavoriteRecipes));
    }
  } else if (!getFavoriteRecipes || getFavoriteRecipes === []) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([currentRecipe]));
  }
}
