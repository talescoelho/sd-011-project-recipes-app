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

// Refatorar essa função
export const fetchCocktails = () => {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataDrinks = data.drinks;
      const resultDrinks = [];
      const limitDrinks = 12;
      for (let index = 0; index < limitDrinks; index += 1) {
        resultDrinks.push(dataDrinks[index]);
      }
      return resultDrinks;
    });
};

// Refatorar essa função
export const fetchDrinkCategory = () => {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataDrink = data.drinks;
      const resultDrink = [];
      const limitDrink = 5;
      for (let index = 0; index < limitDrink; index += 1) {
        resultDrink.push(dataDrink[index]);
      }
      return resultDrink;
    });
};

export const fetchCocktailsByCategories = (category) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataDrinks = data.drinks;
      const limitDrink = 12;
      return dataDrinks.slice(0, limitDrink);
    });
};
