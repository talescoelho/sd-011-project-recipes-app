export const fetchDrinkDetails = async (id) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(URL);
  const json = await response.json();

  try {
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export const test = 'test';
