const URLdrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const URLmeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

// Adicionar logica de tratamento de reejct - Try and catch
export const APImealById = async (id) => {
  const URLmealsid = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const APIfetch = await fetch(URLmealsid);
  const APIjson = await APIfetch.json();
  console.log('rodou API request meals do service');
  return APIjson;
};

export const APIdrinks = async () => {
  const APIfetch = await fetch(URLdrinks);
  const APIjson = await APIfetch.json();
  console.log('rodou API request meals do service');

  return APIjson;
};

export const APImeals = async () => {
  const APIfetch = await fetch(URLmeals);
  const APIjson = await APIfetch.json();
  return APIjson;
};
