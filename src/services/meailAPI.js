const limitRecomentation = 6;
const limitMealsCategory = 5;
const limitRender = 12;

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

export const fetchMealById = (id) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.meals);
};

export const fetchMealsRecommended = () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataMeals = data.meals;
      return dataMeals.slice(0, limitRecomentation);
    });
};

export const fetchMeals = () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataMeals = data.meals;
      return dataMeals.slice(0, limitRender);
    });
};

export const fetchMealsCategory = () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataMeals = data.meals;
      return dataMeals.slice(0, limitMealsCategory);
    });
};

export const fetchMealsByCategories = (category) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const dataMeals = data.meals;
      return dataMeals.slice(0, limitRender);
    });
};

export const fetchRandomMeal = () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/random.php';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.meals);
};

export const fetchMealsIngredients = () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.meals);
};
