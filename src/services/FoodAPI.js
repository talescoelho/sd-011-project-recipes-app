export const fetchFood = async (id) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(URL);
  const json = await response.json();

  try {
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchFoodCategory = async (type) => {
  const cat = {
    meals: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  };
  const magic = 5;
  const response = await fetch(cat[type]);
  const json = await response.json();
  try {
    const array = Object.values(json)[0].filter((el,
      index) => index < magic).map((el) => el.strCategory);
    array.unshift('All');
    return array;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFilteredFoodList = async (food, type) => {
  const magic = 12;
  const cat = {
    meals: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`,
    drinks: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${food}`,
  };
  const response = await fetch(cat[type]);
  const json = await response.json();
  try {
    const array = Object.values(json)[0].filter((el,
      index) => index < magic);
    return array;
  } catch (error) {
    throw new Error(error);
  }
};
