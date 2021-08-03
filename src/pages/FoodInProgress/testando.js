import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPI, addIngredientMeal, deleteIngredientMeal } from '../../redux/actions';
import RecipeInProgress from '../../components/recipeInProgress';

const FoodInProgress = () => {
  const [food, setFood] = useState();
  const [disabled, setDisabled] = useState(true);
  const { pathname } = useLocation();
  const beginning = 9;
  const end = 12;
  const id = pathname.slice(beginning, pathname.length - end);
  const dispatch = useDispatch();
  const aaa = document.getElementsByClassName('ingredients');
  const ingredients = useSelector((state) => state.inProgressReducer.ingredientsMeal);
  const meal = useSelector((state) => state.inProgressReducer.recipeReceived);
  const error = useSelector((state) => state.inProgressReducer.error);
  const btn = document.getElementById('finish-btn');
  const favoriteRecipes = localStorage.getItem('favoriteRecipes') || [];

  useEffect(() => {
    dispatch(fetchAPI('meal', id));
  }, [dispatch, id]);

  useEffect(() => {
    setFood(meal);

    if (food !== undefined && food.length !== 0) {
      const inProgressRecipes = localStorage.getItem('inProgressRecipes');

      if (inProgressRecipes === null) {
        localStorage.setItem('inProgressRecipes',
          JSON.stringify({ cocktails: {}, meals: {} }));
      } else {
        const foodId = food.meals[0].idMeal;
        const localStorageBase = JSON.parse(window.localStorage.inProgressRecipes);

        if (!localStorageBase.meals[foodId]) {
          localStorageBase.meals = { ...localStorageBase.meals, [foodId]: ingredients };
        }

        const stringifyBase = JSON.stringify(localStorageBase);
        window.localStorage.inProgressRecipes = stringifyBase;
      }
    }
  }, [meal, food, ingredients]);

  useEffect(() => {
    if (aaa.length > 0) {
      if (aaa.length === ingredients.length) setDisabled(false);
    }
  }, [aaa.length, ingredients.length]);

  // const favorite = () => {
  //   if (food !== undefined && food.length !== 0) {
  //     const { meals } = food;
  //     const base = {
  //       id: meals[0].idMeal,
  //       type: pathname.slice(1, 7),
  //       area: meals[0].strArea,
  //       category: meals[0].strCategory,
  //       alcoholicOrNot: '',
  //       name: meals[0].strMeal,
  //       image: meals[0].strMealThumb,
  //     };
  //     console.log(favoriteRecipes);
  //     const help = [...favoriteRecipes, base];
  //     localStorage.setItem('favoriteRecipes', JSON.stringify(help));
  //   }
  // };

  const checkIngredient = (event) => {
    const { target } = event;
    const { checked, parentNode } = target;
    const name = parentNode.innerText;

    if (checked === true) {
      parentNode.style.textDecoration = 'line-through';
      dispatch(addIngredientMeal(name));
    } else {
      parentNode.style.textDecoration = '';
      dispatch(deleteIngredientMeal(name));
      setDisabled(true);
    }
  };

  const renderMeal = () => {
    if (Object.keys(food).length > 0) {
      // const localStorageBase = JSON.parse(window.localStorage.inProgressRecipes);
      // const mealId = Object.keys(localStorageBase.meals)
      //   .filter((ids) => ids === id);
      // const findIdInLS = localStorageBase.meals[mealId];
      // const ings = document.getElementsByClassName('ingredients');

      // if (ings.length > 0) {
      //   for (let i = 0; i < ings.length; i += 1) {
      //     if (ings[i].innerText === findIdInLS[i]) {
      //       ings[i].style.
      //     }
      //     console.log(ings[i].innerText);
      //   }
      //   console.log(ings.length);
      // }

      return (
        <RecipeInProgress
          typeURL={ food }
          ingQuant="20"
          checkIng={ checkIngredient }
          array={ ingredients }
          // favorite={ favorite }
          disabled={ disabled }
        />
      );
    }

    return error;
  };

  return (
    food ? renderMeal() : null
  );
};

export default FoodInProgress;
