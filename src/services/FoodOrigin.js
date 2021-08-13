import _ from 'lodash';
import { fetchFoodCards, fetchCardsFromIngredients } from '../Redux/reducers/recipes';

export const fetchFoodFilters = async () => {
  const URL_FOOD = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const response = await fetch(URL_FOOD);
  const json = await response.json();
  return Object.values(json)[0].map((el) => el.strArea);
};

export const fetchFilteredCards = (area) => async (dispatch) => {
  if (area !== 'All') {
    const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
    const response = await fetch(API_URL);
    const json = await response.json();
    const { meals } = json;
    dispatch(fetchFoodCards({ filtered: meals, cat: 'meals' }));
  }
  if (area === 'All') {
    dispatch(fetchFoodCards({ filtered: '' }));
  }
};

export const getIngredients = async (type) => {
  const maxCards = 12;
  const foods = {
    meals: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
  };

  const response = await fetch(foods[type]);
  const json = await response.json();
  const result = json[type].filter((el, i) => i < maxCards);
  const refactored = result.map((el) => ({
    title: _.find(el, (k, v) => /strIngredient/i.test(v)),
    src: {
      meals: `https://www.themealdb.com/images/ingredients/${el.strIngredient}-Small.png`,
      drinks: `https://www.thecocktaildb.com/images/ingredients/${el.strIngredient1}-Small.png`,
    },
    description: el.strDescription,

  }));

  try {
    return refactored;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchCardsByIngredients = (ingredient, type) => async (dispatch) => {
  const foods = {
    meals: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    drinks: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  };
  const r = await fetch(foods[type]);
  const json = await r.json();

  dispatch(fetchCardsFromIngredients({ cards: json[type], cat: type, loaded: true }));
};
