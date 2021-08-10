const limitRecomentation = 6;
const limitDrinksCategory = 5;
const limitRender = 12;

export const fetchCocktailsByIngredient = (ingredient) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.drinks);
};

export const fetchCocktailsByName = (name) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.drinks);
};

export const fetchCocktailsByFirstLetter = (firstLetter) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.drinks);
};

export const fetchCocktailById = (id) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.drinks);
};

export const fetchCocktailsRecommended = () => {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataDrinks = data.drinks;
      return dataDrinks.slice(0, limitRecomentation);
    });
};

export const fetchCocktails = () => {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataDrinks = data.drinks;
      return dataDrinks.slice(0, limitRender);
    });
};

export const fetchDrinkCategory = () => {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataDrinks = data.drinks;
      return dataDrinks.slice(0, limitDrinksCategory);
    });
};

export const fetchCocktailsByCategories = (category) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataDrinks = data.drinks;
      return dataDrinks.slice(0, limitRender);
    });
};

export const fetchRandomCocktail = () => {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.drinks);
};

export const fetchCocktailsIngredients = () => {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.drinks);
};
