function fetchUrl(url) {
  return fetch(url).then((res) => res.json());
}

export const fetchByIngredients = async (ingredient) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const getDataByIngredients = fetchUrl(URL)
    .then((dataByIngredients) => dataByIngredients)
    .catch(((err) => err));
  return getDataByIngredients;
};

export const fetchByName = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const getDataByName = fetchUrl(URL)
    .then((dataByName) => dataByName)
    .catch(((err) => err));
  return getDataByName;
};

export const fetchByFirstLetter = async (firstLetter) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const getDataByFirstLetter = fetchUrl(URL)
    .then((dataByFirstLetters) => dataByFirstLetters)
    .catch(((err) => err));
  return getDataByFirstLetter;
};
