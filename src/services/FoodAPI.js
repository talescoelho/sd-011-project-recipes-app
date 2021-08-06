import { getFoodCategories, getFoodCard } from '../Redux/actions/index';

export const fetchFood = ({ id, type }) => async (dispatch) => {
  const cat = {
    meals: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    drinks: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  };

  const fetchFoodCard = async () => {
    console.log(type);
    const response = await fetch(cat[type]);
    console.log(response);
    const json = await response.json();

    try {
      const s = [...Object.values(json)[0]];
      return dispatch(getFoodCard({ filtered: s[0], selectedCategory: type }));
    } catch (error) {
      throw new Error(error);
    }
  };
  return fetchFoodCard();
};

export const fetchFoodCategory = (type) => async (dispatch) => {
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
    dispatch(getFoodCategories({ type, array }));
    return array;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFilteredFoodList = (food, type) => async (dispatch) => {
  console.log(food, type);
  const magic = 12;
  const allCat = {
    meals: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',

  };
  const cat = {
    meals: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`,
    drinks: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${food}`,
  };
  const response = await fetch(food !== 'All' ? cat[type] : allCat[type]);
  const json = await response.json();
  try {
    const array = Object.values(json)[0].filter((el,
      index) => index < magic);
    return dispatch(getFoodCard({ filtered: array, selectedCategory: food }));
  } catch (error) {
    throw new Error(error);
  }
};
