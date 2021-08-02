export const fetchMealsByIngredient = (ingredient) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.meals);
};

export const fetchMealsByName = (name) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.meals);
};

export const fetchMealsByFirstLetter = (firstLetter) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.meals);
};

// Refatorar essa função
export const fetchMeals = () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataMeals = data.meals;
      const resultMeals = [];
      const limitMeals = 12;
      for (let index = 0; index < limitMeals; index += 1) {
        resultMeals.push(dataMeals[index]);
      }
      return resultMeals;
    });
};

// Refatorar essa função
export const fetchMealsCategory = () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataMeals = data.meals;
      const resultMeals = [];
      const limitMeals = 5;
      for (let index = 0; index < limitMeals; index += 1) {
        resultMeals.push(dataMeals[index]);
      }
      return resultMeals;
    });
};

export const fetchMealsByCategories = (category) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataDrinks = data.meals;
      const limitDrink = 12;
      return dataDrinks.slice(0, limitDrink);
    });
};
