import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import RecipeAppContext from '../context/RecipeAppContext';

function RecipeCards() {
  const { drinksList, foodsList } = useContext(RecipeAppContext);
  const history = useHistory();

  // const redirectToDetails = () => {

  // };

  useEffect(() => {
    if (drinksList.length === 1) {
      history.push(`/bebidas/${drinksList[0].idDrink}`);
    } else if (foodsList.length === 1) {
      history.push(`/comidas/${foodsList[0].idMeal}`);
    }
  }, [drinksList, foodsList]);

  return (
    <div>
      {drinksList && drinksList.map((recipe) => <p key={ recipe.idDrink }>{recipe.strDrink}</p>)}
      {foodsList && foodsList.map((recipe) => <p key={ recipe.idMeal }>{recipe.strMeal}</p>)}
    </div>
  );
}

export default RecipeCards;
