export default function useLocalStorage() {
  const getFromStorage = (key) => {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (err) {
      return null;
    }
  };

  const getFavoriteRecipes = () => {
    const favoriteRecipes = getFromStorage('favoriteRecipes');
    if (favoriteRecipes) {
      return favoriteRecipes;
    }

    return [];
  };

  const getInProgressRecipes = (type) => {
    const inProgressRecipes = getFromStorage('inProgressRecipes');
    if (inProgressRecipes && inProgressRecipes[type]) {
      return inProgressRecipes[type];
    }

    return {};
  };

  const getDoneRecipes = () => {
    const doneRecipes = getFromStorage('doneRecipes');
    if (doneRecipes) {
      return doneRecipes;
    }

    return [];
  };

  const setToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const setInProgressRecipes = (type, recipes) => {
    const inProgressRecipes = getInProgressRecipes(type);
    inProgressRecipes[type][recipes.id] = recipes;
    setToStorage('inProgressRecipes', inProgressRecipes);
  };

  const setDoneRecipes = (recipes) => {
    const doneRecipes = getDoneRecipes();
    doneRecipes.push(recipes);
    setToStorage('doneRecipes', doneRecipes);
  };

  const setFavoriteRecipes = (recipes) => {
    const favoriteRecipes = getFavoriteRecipes();
    favoriteRecipes.push(recipes);
    setToStorage('favoriteRecipes', favoriteRecipes);
  };

  return {
    getFavoriteRecipes,
    getInProgressRecipes,
    getDoneRecipes,
    setInProgressRecipes,
    setDoneRecipes,
    setFavoriteRecipes,
  };
}
