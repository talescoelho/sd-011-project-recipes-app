export default function saveFavoriteRecipesOnLocalStorage(favoriteRecipes, url) {
  const storageFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const storageUrl = JSON.parse(localStorage.getItem('urlOfFavoriteRecipes'));

  if (storageFavoriteRecipes === null) {
    localStorage
      .setItem('urlOfFavoriteRecipes', JSON.stringify([{ url, id: favoriteRecipes.id }]));

    return localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteRecipes]));
  }

  if (storageFavoriteRecipes.find(({ id }) => id === favoriteRecipes.id)) {
    const filterFavoriteRecipes = storageFavoriteRecipes
      .filter(({ id }) => id !== favoriteRecipes.id);
    const filterURLfavorites = storageUrl
      .filter((favoriteUrl) => favoriteUrl.id !== favoriteRecipes.id);
    localStorage.setItem('urlOfFavoriteRecipes', JSON.stringify(filterURLfavorites));

    return localStorage.setItem('favoriteRecipes', JSON.stringify(filterFavoriteRecipes));
  }

  localStorage
    .setItem('urlOfFavoriteRecipes', JSON
      .stringify([...storageUrl, { url, id: favoriteRecipes.id }]));

  return localStorage.setItem('favoriteRecipes',
    JSON.stringify([...storageFavoriteRecipes, favoriteRecipes]));
}
