import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  fetchAPI,
  addIngredientMeal,
  deleteIngredientMeal,
  updateArray } from '../../redux/actions';
import RecipeInProgress from '../../components/recipeInProgress';

function FoodInProgress() {
  const [food, setFood] = useState();
  const dispatch = useDispatch();
  const meal = useSelector((state) => state.inProgressReducer.recipeReceived); // retorno api receita
  const ingredients = useSelector((state) => state.inProgressReducer.ingredientsMeal); // arary de ingredientes já checkados

  const { pathname } = useLocation();

  const beginning = 9;
  const end = 12;
  const id = pathname.slice(beginning, pathname.length - end);

  useEffect(() => {
    dispatch(fetchAPI('meal', id));
  }, [dispatch, id]);

  useEffect(() => {
    setFood(meal);
  }, [meal]);

  useEffect(() => {
    console.log('eu que estou apagando');
    const local = localStorage.getItem('inProgressRecipes');
    if (local) {
      const array = JSON.parse(local);
      if (array.meals[id]) {
        console.log(array.meals[id]);
        dispatch(updateArray(array.meals[id]));
      }
    }
  }, [id, dispatch]);

  useEffect(() => {
    console.log('eu que estou apagando');
    const local = localStorage.getItem('inProgressRecipes');
    if (local) {
      const array = JSON.parse(local);
      array.meals[id] = ingredients;
      localStorage.setItem('inProgressRecipes', JSON.stringify(array));
    } else {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        cocktails: {},
        meals: {
          [id]: ingredients,
        },
      }));
    }
  }, [ingredients, id]);

  const checkIngredients = (e) => {
    const { target } = e;
    const { parentNode, checked } = target;
    console.log(checked);
    const ingName = Number(target.id);

    if (checked === true) {
      parentNode.style.textDecoration = 'line-through';
      dispatch(addIngredientMeal(ingName));
    } else {
      parentNode.style.textDecoration = '';
      dispatch(deleteIngredientMeal(ingName));
    }
  };

  return (
    food && Object.keys(food).length > 0 ? <RecipeInProgress
      typeURL={ food }
      ingQuant="20"
      checkIng={ checkIngredients }
      arrayCheckedIngredients={ ingredients }
    /> : null
  );
}

export default FoodInProgress;

// const checkIngredients = (e) => {
//   const { target } = e;
//   const { parentNode, checked } = target;
//   const ingName = parentNode.innerText;
//   const inProgressRecipes = JSON.parse(test);
//   const keys = Object.keys(inProgressRecipes.meals);
//   console.log(inProgressRecipes.meals);
//   if (checked === true) {
//     parentNode.style.textDecoration = 'line-through';
//     dispatch(addIngredientMeal(ingName));
//     inProgressRecipes.meals = {
//       ...inProgressRecipes.meals, [food.meals[0].idMeal]: ingredients,
//     };
//   } else {
//     parentNode.style.textDecoration = '';
//     dispatch(deleteIngredientMeal(ingName));
//     // inProgressRecipes = inProgressRecipes.meals.filter((recipe) => (
//     //   Object.keys(recipe) !== id
//     // ));
//     // test.meals = { ...test.meals,
//     //   [food.meals[0].idMeal]: ingredients.splice(ingredients.indexOf(ingName), 1) };
//   }
//   localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
// //   users.push($('#textInput').val());
// // localStorage.setItem('usernames', JSON.stringify(users));
//   //   {
//   //     cocktails: {
//   //         id-da-bebida: [lista-de-ingredientes-utilizados],
//   //         ...
//   //     },
//   //     meals: {
//   //         id-da-comida: [lista-de-ingredientes-utilizados],
//   //         ...
//   //     }
//   // }
// };
