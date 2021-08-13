import produce from 'immer';

export const isRecipeDone = (idReceita) => {
  const data = JSON.parse(localStorage.getItem('doneRecipes'));
  const idInteiro = parseInt(idReceita, 10);
  return data && data.some((x) => parseInt(x.id, 10) === idInteiro);
};

export function isRecipeInProgress({ id, fd }) {
  const data = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!data) {
    return false;
  }

  if (data && data[fd] && data[fd][id]) {
    return true;
  }
}

export const bookMarkRecipe = async (item) => {
  const realId = item.idDrink || item.idMeal;
  const food = {
    id: item.idDrink || item.idMeal,
    type: item.idDrink ? 'bebida' : 'comida',
    area: item.strArea || '',
    category: item.strCategory || '',
    alcoholicOrNot: item.strAlcoholic || '',
    name: item.strMeal || item.strDrink,
    image: item.strMealThumb || item.strDrinkThumb,
  };

  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  if (!favoriteRecipes) {
    return localStorage.setItem('favoriteRecipes', JSON.stringify([food]));
  }

  if (favoriteRecipes.some((el) => el.id === realId)) {
    return localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify([...favoriteRecipes.filter((el) => el.id !== realId)]),
    );
  }
  localStorage.setItem(
    'favoriteRecipes',
    JSON.stringify([...favoriteRecipes, food]),
  );
};

export const showRecipe = (id) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  return !(doneRecipes && doneRecipes.find((el) => el.id === id));
};

export const addDoneRecipe = ({ item }) => {
  const magic = 10;
  const food = {
    id: item.idDrink || item.idMeal,
    type: item.idDrink ? 'bebida' : 'comida',
    area: item.strArea || '',
    category: item.strCategory || '',
    alcoholicOrNot: item.strAlcoholic || '',
    doneDate: new Date().toISOString().slice(0, magic),
    name: item.strMeal || item.strDrink,
    image: item.strMealThumb || item.strDrinkThumb,
    tags: item.strTags || '',
  };

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  const newProgressRecipes = produce(inProgressRecipes, (draft) => {
    const type = item.idDrink ? 'cocktails' : 'meals';
    delete draft[type][food.id];
    return draft;
  });

  localStorage.setItem('inProgressRecipes', JSON.stringify(newProgressRecipes));

  if (!doneRecipes) {
    return localStorage.setItem('doneRecipes', JSON.stringify([food]));
  }
  if (doneRecipes) {
    const newState = produce(doneRecipes, (draft) => {
      if (draft.find((el) => el.id === food.id)) {
        return draft;
      }
      return draft.concat(food);
    });

    localStorage.setItem('doneRecipes', JSON.stringify(newState));
  }
};

export const favoriteRefactored = (singleFood) => {
  const refactored = {
    id: singleFood.idDrink || singleFood.idMeal,
    type: singleFood.idDrink ? 'bebida' : 'comida',
    area: singleFood.strArea || '',
    category: singleFood.strCategory || '',
    alcoholicOrNot: singleFood.strAlcoholic || '',
    name: singleFood.strMeal || singleFood.strDrink,
    image: singleFood.strMealThumb || singleFood.strDrinkThumb,
  };
  return refactored;
};
