const URLingredients = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const URLDrinkingredients = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

export const requestIngredients = async () => {
  const APIfetch = await fetch(URLingredients);
  const APIjson = await APIfetch.json();
  return APIjson;
};

export const requestDrinkIngredients = async () => {
  const APIfetch = await fetch(URLDrinkingredients);
  const APIjson = await APIfetch.json();
  return APIjson;
};
