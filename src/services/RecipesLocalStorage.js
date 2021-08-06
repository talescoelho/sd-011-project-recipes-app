export const progressRecipe = ({ id, fd }) => {
  const inProgressRecipes = localStorage.getItem('inProgressRecipes');

  const oldProgress = JSON.parse(inProgressRecipes);

  const toLocal = { ...oldProgress, [fd]: { [id]: [] } };

  localStorage.setItem('inProgressRecipes', JSON.stringify(toLocal));
};

export const isRecipeDone = (idReceita) => {
  const data = JSON.parse(localStorage.getItem('doneRecipes'));
  const idInteiro = parseInt(idReceita, 10);
  return data && data.some((x) => parseInt(x.id, 10) === idInteiro);
};

export function isRecipeInProgress({ id, fd }) {
  const data = (JSON.parse(localStorage.getItem('inProgressRecipes')));
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
    return localStorage.setItem('favoriteRecipes',
      JSON.stringify([...favoriteRecipes.filter((el) => el.id !== realId)]));
  }

  localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes, food]));
};

export const showRecipe = ({ id, fd }) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!doneRecipes) {
    return true;
  }
  if (doneRecipes && doneRecipes.find((el) => el.id === id)) {
    return false;
  }
};
