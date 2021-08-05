import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import getMealById from '../services/getMealById';
import randomRecipe from '../services/randomRecipe';
import StartRecipeButton from '../components/StartRecipeButton';
import RecipeAppContext from '../context/RecipeAppContext';
import RenderDrinkDetails from '../components/RenderDrinkDetails';
import RenderDrinkIngred from '../components/RenderDrinkIngred';
import RenderDrinkInstruction from '../components/RenderDrinkInstruction';
import RenderDrinkRecomendation from '../components/RenderDrinkRecomendation';

const copy = require('clipboard-copy');

function DrinksDetails(props) {
  const { match: { params: { id } } } = props;
  const [click, setClick] = useState(false);
  const {
    drink,
    setDrink,
    recomMeal,
    setRecomMeal,
    isRecipeDone,
    setIsRecipeDone,
  } = useContext(RecipeAppContext);

  function copyLink(drinkId) {
    copy(`http://localhost:3000/bebidas/${drinkId}`);
    setClick(true);
  }

  useEffect(() => {
    const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const getMealDetails = async () => {
      const { drinks } = await getMealById(endpoint);
      setDrink(drinks[0]);
    };

    const getRandomMeal = async () => {
      const { meals } = await randomRecipe('themealdb');
      setRecomMeal(meals);
    };

    getMealDetails();
    getRandomMeal();
  }, []);

  function checkIsRecipeDone(arrayDoneRecipe, currentDrink) {
    const arrayLS = arrayDoneRecipe.some(
      (recipe) => recipe.id === Number(currentDrink.idDrink),
    );
    if (!arrayLS) {
      console.log('vrau');
      setIsRecipeDone(false);
    }
  }

  useEffect(() => {
    const localStorageDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (!localStorageDoneRecipes) {
      setIsRecipeDone(false);
      return;
    }
    checkIsRecipeDone(localStorageDoneRecipes, drink);
  }, [drink]);

   // inProgressRecipes
  // {
  //   cocktails: {
  //       id-da-bebida: [lista-de-ingredientes-utilizados],
  //       ...
  //   },
  //   meals: {
  //       id-da-comida: [lista-de-ingredientes-utilizados],
  //       ...
  //   }
  // }

  return (
    <div>
      {drink && <RenderDrinkDetails copyLink={ copyLink } />}
      <span>{click ? <p>Link copiado!</p> : null}</span>
      {drink && <RenderDrinkIngred />}
      {drink && <RenderDrinkInstruction />}
      {recomMeal && <RenderDrinkRecomendation />}
      {isRecipeDone ? null : <StartRecipeButton type="bebidas" id={ id } />}
    </div>
  );
}

DrinksDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DrinksDetails;
