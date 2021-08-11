import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeAppContext from '../context/RecipeAppContext';
import bkHeart from '../images/blackHeartIcon.svg';
import wtHeart from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function RecipeAppProvider({ children }) {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [foodsList, setFoodList] = useState('');
  const [drinksList, setDrinksList] = useState('');
  const [drinkCategoryList, setDrinkCategory] = useState('');
  const [foodCategoryList, setFoodCategory] = useState('');
  const [toggleOn, setToggleOn] = useState(false);
  const [drink, setDrink] = useState('');
  const [meal, setMeal] = useState('');
  const [isRecipeDone, setIsRecipeDone] = useState(true);
  const [recomMeal, setRecomMeal] = useState('');
  const [recomDrink, setRecomDrink] = useState('');
  const [inProgressRecipes, setInProgressRecipes] = useState(false);
  const [isFavRecipe, setIsFavRecipe] = useState(false);

  function checkFavoriteDrink() {
    const { idDrink } = drink;
    const favRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favRecipes) return;
    const checkedRecipe = favRecipes.some(
      (recipe) => recipe.id === idDrink,
    );
    if (checkedRecipe) setIsFavRecipe(checkedRecipe);
  }

  function saveFavoriteDrink() {
    const { idDrink, strAlcoholic, strCategory, strDrink, strDrinkThumb } = drink;
    let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favoriteRecipes) favoriteRecipes = [];
    const checkIsFavorited = favoriteRecipes.some((recipe) => recipe.id === idDrink);
    if (checkIsFavorited) {
      console.log('é verdadeiro');
      const newFavRecipe = favoriteRecipes.filter((recipe) => recipe.id !== idDrink);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavRecipe));
      setIsFavRecipe(false);
    }
    if (!checkIsFavorited) {
      const newFavoriteRecipe = [
        ...favoriteRecipes,
        {
          id: idDrink,
          type: 'bebida',
          area: '',
          category: strCategory,
          alcoholicOrNot: strAlcoholic,
          name: strDrink,
          image: strDrinkThumb,
        },
      ];
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipe));
      setIsFavRecipe(true);
    }
  }

  function saveFavoriteMeal() {
    const { idMeal, strArea, strCategory, strMeal, strMealThumb } = meal;
    let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favoriteRecipes) favoriteRecipes = [];
    const checkIsFavorited = favoriteRecipes.some((recipes) => recipes.id === idMeal);
    if (checkIsFavorited) {
      const newFavRecipe = favoriteRecipes.filter((recipes) => recipes.id !== idMeal);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavRecipe));
      setIsFavRecipe(false);
    }
    if (!checkIsFavorited) {
      const newFavoriteRecipe = [
        ...favoriteRecipes,
        {
          id: idMeal,
          type: 'comida',
          area: strArea,
          category: strCategory,
          alcoholicOrNot: '',
          name: strMeal,
          image: strMealThumb,
        },
      ];
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipe));
      setIsFavRecipe(true);
    }
  }

  function checkFavoriteMeal() {
    const { idMeal } = meal;
    const favRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favRecipes) return;
    const checkedRecipe = favRecipes.some(
      (recipe) => recipe.id === idMeal,
    );
    if (checkedRecipe) setIsFavRecipe(checkedRecipe);
  }

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

  const handleDisabled = () => {
    const minLength = 6;
    const validRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const emailIsValid = validRegex.test(login.email);
    if (emailIsValid && login.password.length > minLength) {
      return false;
    }
    return true;
  };

  const data = {
    checkFavoriteMeal,
    saveFavoriteMeal,
    checkFavoriteDrink,
    saveFavoriteDrink,
    isFavRecipe,
    setIsFavRecipe,
    inProgressRecipes,
    setInProgressRecipes,
    setRecomDrink,
    recomDrink,
    setRecomMeal,
    recomMeal,
    setIsRecipeDone,
    isRecipeDone,
    meal,
    setMeal,
    drink,
    setDrink,
    bkHeart,
    wtHeart,
    shareIcon,
    handleChange,
    handleDisabled,
    email: login.email,
    setFoodList,
    setDrinksList,
    foodsList,
    drinksList,
    setDrinkCategory,
    setFoodCategory,
    drinkCategoryList,
    foodCategoryList,
    setLogin,
    toggleOn,
    setToggleOn,
  };

  return (
    <RecipeAppContext.Provider value={ data }>
      { children }
    </RecipeAppContext.Provider>
  );
}

RecipeAppProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.array),
}.isRequire;

export default RecipeAppProvider;
