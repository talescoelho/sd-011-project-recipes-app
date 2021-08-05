const URLmeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const URLdrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const APImeals = async () => {
  const APIfetch = await fetch(URLmeals);
  const APIjson = await APIfetch.json();
  return APIjson;
};

export const APIdrinks = async () => {
  const APIfetch = await fetch(URLdrinks);
  const APIjson = await APIfetch.json();
  return APIjson;
};

/* export default { APImeals, APIdrinks }; */
