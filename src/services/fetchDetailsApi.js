const filterElements = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null || obj[key].length === 0) {
      delete obj[key];
    }
  });
};

const SIX = 6;

export const fetchDetails = async (selector, id) => {
  if (selector === 'meal') {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const result = await response.json();
    const obj = result.meals[0];
    filterElements(obj);
    return obj;
  }
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const result = await response.json();
  const obj = result.drinks[0];
  filterElements(obj);
  return obj;
};

export const fetchRecomendation = async (selector) => {
  if (selector === 'meal') {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const result = await response.json();
    const obj = result.drinks.slice(0, SIX);
    return obj;
  }
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const result = await response.json();
  const obj = result.meals.slice(0, SIX);
  return obj;
};
