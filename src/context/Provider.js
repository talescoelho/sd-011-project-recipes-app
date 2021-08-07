import PropTypes from 'prop-types';
import React, { useState, useCallback, useEffect } from 'react';
import MyContext from './MyContext';
import {
  getDrinkById,
  getFoodById,
  getAllFoods,
  getAllDrinks,
  getRandomFood,
  getRandomDrink,
  getFoodsIngredients,
  getDrinksIngredients,
  getFoodsIngredientsFilter,
  getDrinksIngredientsFilter,
} from '../services/RecipesServices';

function Provider({ children }) {
  const foodsSearchLinks = {
    ingredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
    name: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    firstLetter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
    fetchAll: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    fetchCategories: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    filterByCategory: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
    typeFilter: 'Meal',
    typeFilterKey: 'meals',
  };

  const drinksSearchLinks = {
    ingredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
    name: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    firstLetter: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
    fetchAll: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    fetchCategories: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    filterByCategory: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=',
    typeFilter: 'Drink',
    typeFilterKey: 'drinks',
  };

  const [data, setData] = useState({ results: [], location: '' });

  const [drinkDetails, setDrinkDetails] = useState([]);
  const [foodDetails, setFoodDetails] = useState([]);
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [foodIngredients, setFoodIngredients] = useState([]);
  const [allDrinks, setAllDrinks] = useState({ drinks: [] });
  const [allFoods, setAllFoods] = useState({ foods: [] });

  const addLocalStore = useCallback((id, condition, drink, food) => {
    const newFavorite = {
      id,
      type:
      `${condition ? 'bebida' : 'comida'}`,
      area:
      `${condition ? '' : food.strArea}`,
      category:
      `${condition ? drink.strCategory : food.strCategory}`,
      alcoholicOrNot:
      `${condition ? drink.strAlcoholic : ''}`,
      name:
      `${condition ? drink.strDrink : food.strMeal}`,
      image:
      `${condition ? drink.strDrinkThumb : food.strMealThumb}`,
    };
    if (localStorage.favoriteRecipes) {
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
      favorites.push(newFavorite);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    } else {
      localStorage.setItem('favoriteRecipes', JSON.stringify([newFavorite]));
    }
  }, []);

  const removeLocalStorage = useCallback((id) => {
    if (localStorage.favoriteRecipes) {
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const search = favorites.map((item) => item.id).indexOf(id);
      favorites.splice(search, 1);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    }
  }, []);

  async function AllDrinks() {
    const drinks = await getAllDrinks();
    setAllDrinks({ drinks });
  }

  async function AllFoods() {
    const foods = await getAllFoods();
    setAllFoods({ foods });
  }

  useEffect(() => {
    AllDrinks();
    AllFoods();
  }, []);

  const contextValue = {
    foodsSearchLinks,
    drinksSearchLinks,
    data,
    setData,
    drinkDetails,
    setDrinkDetails,
    getDrinkById,
    foodDetails,
    setFoodDetails,
    getFoodById,
    foodIngredients,
    drinkIngredients,
    removeLocalStorage,
    addLocalStore,
    getRandomFood,
    getRandomDrink,
    getFoodsIngredients,
    getDrinksIngredients,
    getFoodsIngredientsFilter,
    getDrinksIngredientsFilter,
    allDrinks,
    allFoods,
    setFoodIngredients,
    setDrinkIngredients,
  };

  return (
    <MyContext.Provider
      value={ contextValue }
    >
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
