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

// Verifica se a receita está favoritada a partir do id dela no localStorage
export const checkRecipeIsFavorited = (id) => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  if (favoriteRecipes.length > 0) {
    return favoriteRecipes.some((recipe) => recipe.id === id);
  }
  return false;
};

// Remove Recipe de favoritos
export const removeFromFavorites = (id) => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const newFavorites = favoriteRecipes.filter((favRecipe) => favRecipe.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
};

// Add recipe in localStorage
export const addRecipeInFavorites = (recipe, url) => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const type = url.replace(/\//ig, '').replace(/[0-9]/g, '').replace('s', '')
    .replace('in-progress', '');
  const {
    idMeal,
    idDrink,
    strCategory,
    strAlcoholic,
    strDrink,
    strMeal,
    strDrinkThumb,
    strMealThumb,
    strArea } = recipe;
  const newRecipe = {
    id: idMeal || idDrink,
    type,
    area: strArea || '',
    category: strCategory || '',
    alcoholicOrNot: strAlcoholic || '',
    name: strMeal || strDrink,
    image: strMealThumb || strDrinkThumb,
  };
  localStorage.setItem('favoriteRecipes',
    JSON.stringify([...favoriteRecipes, newRecipe]));
};

// ADD A Done Recipe
export const addRecipeIsDone = (recipe, url) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const type = url.replace(/\//ig, '').replace(/[0-9]/g, '').replace('s', '')
    .replace('in-progress', '');
  const currentDate = new Date().toLocaleDateString();

  const {
    idMeal,
    idDrink,
    strCategory,
    strAlcoholic,
    strDrink,
    strMeal,
    strDrinkThumb,
    strMealThumb,
    strArea,
    strTags } = recipe;
  const newRecipe = {
    id: idMeal || idDrink,
    type,
    area: strArea || '',
    category: strCategory || '',
    alcoholicOrNot: strAlcoholic || '',
    name: strMeal || strDrink,
    image: strMealThumb || strDrinkThumb,
    doneDate: currentDate,
    tags: [],
  };

  if (strTags === undefined || strTags === null) {
    newRecipe.tags = [];
  } else {
    newRecipe.tags = strTags.split(',');
  }

  localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipes, newRecipe]));
};

// Atualiza LocalStorage de RecipesInProgress passando um objeto
export const updateRecipeInProgress = (url, recipe, id) => {
  const recipeInProgress = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
  if (url.includes('comidas')) {
    recipeInProgress.meals[id] = recipe;
  }
  if (url.includes('bebidas')) {
    recipeInProgress.cocktails[id] = recipe;
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(recipeInProgress));
};

export const createLocalStorage = () => {
  const inProgressRecipes = {
    cocktails: {},
    meals: {},
  };
  const doneRecipes = [];
  const favoriteRecipes = [];
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
};

export const mockLocalStorage = () => {
  const doneRecipes = [
    {
      id: '52771',
      type: 'comida',
      area: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'bebida',
      area: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    },
  ];
  const favoriteRecipes = [
    {
      id: '52771',
      type: 'comida',
      area: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    },
    {
      id: '178319',
      type: 'bebida',
      area: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    },
  ];
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
};
