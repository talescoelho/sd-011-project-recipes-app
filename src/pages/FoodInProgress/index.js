import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchAPI, addIngredientMeal, deleteIngredientMeal } from '../../redux/actions';
import RecipeInProgress from '../../components/recipeInProgress';

function FoodInProgress() {
  const [food, setFood] = useState();
  const dispatch = useDispatch();
  const meal = useSelector((state) => state.inProgressReducer.recipeReceived);
  const ingredients = useSelector((state) => state.inProgressReducer.ingredientsMeal);

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

  const checkIngredients = (e) => {
    const { target } = e;
    const { parentNode, checked } = target;
    const ingName = parentNode.innerText;

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
      array={ ingredients }
    /> : null
  );
}

export default FoodInProgress;
