import React from 'react';

const URLdrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const URLmeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const URLmealsByCat = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const URLdrinksByCat = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const alertError = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

function alertF() {
  return (
    <div>
      {alertError}
    </div>
  );
}

// Adicionar logica de tratamento de reejct - Try and catch

export const APImealById = async (id) => {
  const URLmealsid = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const APIfetch = await fetch(URLmealsid);
  const APIjson = await APIfetch.json();
  console.log('rodou API request meals do service');
  return APIjson;
};
export const APIDrinksById = async (id) => {
  const URLDrinksId = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const APIfetch = await fetch(URLDrinksId);
  const APIjson = await APIfetch.json();
  console.log('rodou API request drinks do service');
  return APIjson;
};

export const APIdrinks = async () => {
  const APIfetch = await fetch(URLdrinks);
  const APIjson = await APIfetch.json();
  const keyDrinks = APIjson.drinks;
  const num12 = 12;
  const max12 = keyDrinks.slice(0, num12);
  return max12;
};

export const APImeals = async () => {
  const APIfetch = await fetch(URLmeals);
  const APIjson = await APIfetch.json();
  const keyMeals = APIjson.meals;
  const num12 = 12;
  const max12 = keyMeals.slice(0, num12);
  return max12;
};

export const APImealsByCat = async () => { // busca o nome das categorias
  const APIfetch = await fetch(URLmealsByCat);
  const APIjson = await APIfetch.json();
  const keyMeals = APIjson.meals;
  const num5 = 5;
  const max5 = keyMeals.slice(0, num5);
  return max5;
};

export const APIdrinksByCat = async () => { // busca o nome das categorias
  const APIfetch = await fetch(URLdrinksByCat);
  const APIjson = await APIfetch.json();
  const keyDrinks = APIjson.drinks;
  const num5 = 5;
  const max5 = keyDrinks.slice(0, num5);
  return max5;
};

export const APImealsClickCat = async (category) => {
  const APIfetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  // const APIfetch = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const APIjson = await APIfetch.json();
  const keyMeals = APIjson.meals;
  const num12 = 12;
  const max12 = keyMeals.slice(0, num12);
  return max12;
};

export const APIdrinksClickCat = async (category) => {
  const APIfetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  const APIjson = await APIfetch.json();
  const keyDrinks = APIjson.drinks;
  const num12 = 12;
  const max12 = keyDrinks.slice(0, num12);
  return max12;
};

export const APImealsSearchIgredient = async (igredient, meals) => {
  try {
    const APIfetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${igredient}`);
    const APIjson = await APIfetch.json();
    const keyMeals = APIjson.meals;
    const num12 = 12;
    const max12 = keyMeals.slice(0, num12);
    return max12;
  } catch (error) {
    // eslint-disable-next-line no-alert
    alertF();
    return meals;
  }
};

export const APImealsSearchName = async (name, meals) => {
  try {
    const APIfetch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const APIjson = await APIfetch.json();
    const keyMeals = APIjson.meals;
    const num12 = 12;
    const max12 = keyMeals.slice(0, num12);
    return max12;
  } catch (error) {
    // eslint-disable-next-line no-alert
    alertF();
    return meals;
  }
};

export const APImealsSearch1stLetter = async (fstLetter, meals) => {
  try {
    const APIfetch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${fstLetter}`);
    const APIjson = await APIfetch.json();
    const keyMeals = APIjson.meals;
    const num12 = 12;
    const max12 = keyMeals.slice(0, num12);
    return max12;
  } catch (error) {
    // eslint-disable-next-line no-alert
    alertF();
    return meals;
  }
};

export const APIdrinksSearchIgredient = async (igredient, drinks) => {
  try {
    const APIfetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${igredient}`);
    const APIjson = await APIfetch.json();
    const keyDrinks = APIjson.drinks;
    const num12 = 12;
    const max12 = keyDrinks.slice(0, num12);
    return max12;
  } catch (error) {
    // eslint-disable-next-line no-alert
    alertF();
    return drinks;
  }
};

export const APIdrinksSearchName = async (name, drinks) => {
  try {
    const APIfetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const APIjson = await APIfetch.json();
    const keyDrinks = APIjson.drinks;
    const num12 = 12;
    const max12 = keyDrinks.slice(0, num12);
    return max12;
  } catch (error) {
    // eslint-disable-next-line no-alert
    alertF();
    return drinks;
  }
};

export const APIdrinksSearch1stLetter = async (fstLetter, drinks) => {
  try {
    const APIfetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${fstLetter}`);
    const APIjson = await APIfetch.json();
    const keyDrinks = APIjson.drinks;
    const num12 = 12;
    const max12 = keyDrinks.slice(0, num12);
    return max12;
  } catch (error) {
    // eslint-disable-next-line no-alert
    alertF();
    return drinks;
  }
};
