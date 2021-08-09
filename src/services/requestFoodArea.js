const URLingredients = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

export const requestMealsArea = async () => {
  const APIfetch = await fetch(URLingredients);
  const APIjson = await APIfetch.json();
  return APIjson;
};

export const requestMealsByArea = async (country) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
  const APIfetch = await fetch(URL);
  const APIjson = await APIfetch.json();
  return APIjson;
};
