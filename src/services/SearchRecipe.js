/* eslint-disable no-alert */
const getFood = async ({ type, query }) => {
  console.log(type, query);
  const warning = 'Sua busca deve conter somente 1 (um) caracter';
  const recipeType = {
    ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`,
    name: `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    letra: `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
  };
  const fetchData = async () => {
    if (type === 'letra' && query.length > 1) {
      return alert(warning);
    }
    const response = await fetch(recipeType[type]);
    console.log(response);
    const data = await response.json();
    try {
      return data.meals;
    } catch (error) {
      throw new Error(error);
    }
  };
  return fetchData();
};

export default getFood;
