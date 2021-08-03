export const fetchDrink = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(URL);
  const json = await response.json();
  try {
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export const test = 'test';
