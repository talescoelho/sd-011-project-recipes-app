export const fetchIngredient = async (ingrediente) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const fetchName = async (nome) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const fetchFirstLetter = async (primeiraLetra) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
