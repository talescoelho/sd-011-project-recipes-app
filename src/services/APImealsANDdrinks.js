const URLdrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const URLmeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const URLmealsByCat = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const URLdrinksByCat = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

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

export const APIDrinksById = async (id) => {
  const URLmealsid = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const APIfetch = await fetch(URLmealsid);
  const APIjson = await APIfetch.json();
  console.log('rodou API request drinks do service');
  return APIjson;
};

export const APImealsByCat = async () => { // busca o nome das categorias
  const APIfetch = await fetch(URLmealsByCat);
  const APIjson = await APIfetch.json();
  const keyMeals = APIjson.meals;
  const num5 = 5;
  const max5 = keyMeals.splice(0, num5);
  return max5;
};

export const APIdrinksByCat = async () => { // busca o nome das categorias
  const APIfetch = await fetch(URLdrinksByCat);
  const APIjson = await APIfetch.json();
  const keyDrinks = APIjson.drinks;
  const num5 = 5;
  const max5 = keyDrinks.splice(0, num5);
  return max5;
};

export const APImealsClickCat = async (category) => {
  const APIfetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  // const APIfetch = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const APIjson = await APIfetch.json();
  const keyMeals = APIjson.meals;
  const num12 = 12;
  const max12 = keyMeals.splice(0, num12);
  // console.log(max12);
  return max12;
};

export const APIdrinksClickCat = async (category) => {
  const APIfetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  const APIjson = await APIfetch.json();
  const keyDrinks = APIjson.drinks;
  const num12 = 12;
  const max12 = keyDrinks.splice(0, num12);
  return max12;
};
