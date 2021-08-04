import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchAPI, addIngredientDrink, deleteIngredientDrink } from '../../redux/actions';
import RecipeInProgress from '../../components/recipeInProgress';

function FoodInProgress() {
  const [drink, setDrink] = useState();
  const dispatch = useDispatch();
  const cocktail = useSelector((state) => state.inProgressReducer.recipeReceived);
  const ingredients = useSelector((state) => state.inProgressReducer.ingredientsDrink);

  const { pathname } = useLocation();
  const beginning = 9;
  const end = 12;
  const id = pathname.slice(beginning, pathname.length - end);

  useEffect(() => {
    dispatch(fetchAPI('cocktail', id));
  }, [dispatch, id]);

  useEffect(() => {
    setDrink(cocktail);
  }, [cocktail]);

  const checkIngredients = (e) => {
    const { target } = e;
    const { parentNode, checked } = target;
    const ingName = parentNode.innerText;

    if (checked === true) {
      parentNode.style.textDecoration = 'line-through';
      dispatch(addIngredientDrink(ingName));
    } else {
      parentNode.style.textDecoration = '';
      dispatch(deleteIngredientDrink(ingName));
    }
  };

  return (
    drink && Object.keys(drink).length > 0 ? <RecipeInProgress
      typeURL={ drink }
      ingQuant="15"
      checkIng={ checkIngredients }
      arrayCheckedIngredients={ ingredients }
    /> : null
  );
}

export default FoodInProgress;
