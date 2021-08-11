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

  const addFavoriteRecipe = (recipe) => {
    const favoriteRecipes = getFavoriteRecipes();
    favoriteRecipes.push(recipe);
    setToStorage('favoriteRecipes', favoriteRecipes);
  };

  const addInProgressRecipes = (type, recipe) => {
    const inProgressRecipes = getInProgressRecipes(type);

    if (inProgressRecipes[type]) {
      inProgressRecipes[type][recipe.id] = recipe;
    } else {
      inProgressRecipes[type] = { [recipe.id]: recipe };
    }
    setToStorage('inProgressRecipes', inProgressRecipes);
  };

  const addDoneRecipes = (recipe) => {
    const doneRecipes = getDoneRecipes();
    doneRecipes.push(recipe);
    setToStorage('doneRecipes', doneRecipes);
  };

  return {
    getFavoriteRecipes,
    getInProgressRecipes,
    getDoneRecipes,
    addFavoriteRecipe,
    addInProgressRecipes,
    addDoneRecipes,
  };
}
