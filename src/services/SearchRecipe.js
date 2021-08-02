/* eslint-disable no-alert */
const getFood = async ({ type, query }) => {
  const warning = 'Sua busca deve conter somente 1 (um) caracter';
  const recipeType = {
    ingrediente: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`,
    nome: `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    letra: () => (query.length > 1 ? alert(warning) : `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`),
  };
  const fetchData = async () => {
    const response = await fetch(recipeType[type]);
    const data = await response.json();
    console.log(data);
    return data;
  };
  return fetchData();
};

export default getFood;
