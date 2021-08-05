import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import getMealById from '../services/getMealById';
import randomRecipe from '../services/randomRecipe';
import StartRecipeButton from '../components/StartRecipeButton';
import RecipeAppContext from '../context/RecipeAppContext';
import RenderFoodDetails from '../components/RenderFoodDetails';
import RenderFoodIngred from '../components/RenderFoodIngred';
import RenderFoodInstruction from '../components/RenderFoodInstruction';
import RenderFoodVideo from '../components/RenderFoodVideo';
import RenderFoodRecomendation from '../components/RenderFoodRecomendation';

const copy = require('clipboard-copy');

function FoodsDetails(props) {
  const { match: { params: { id } } } = props;
  const [click, setClick] = useState(false);
  const {
    meal,
    setMeal,
    recomDrink,
    setRecomDrink,
    isRecipeDone,
    setIsRecipeDone,
    // inProgressRecipes,
    // setInProgressRecipes,
  } = useContext(RecipeAppContext);

  function copyLink(drinkId) {
    copy(`http://localhost:3000/comidas/${drinkId}`);
    setClick(true);
  }

  useEffect(() => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const getMealDetails = async () => {
      const { meals } = await getMealById(endpoint);
      setMeal(meals[0]);
    };

    const getRandomMeal = async () => {
      const { drinks } = await randomRecipe('thecocktaildb');
      setRecomDrink(drinks);
    };

    getMealDetails();
    getRandomMeal();
  }, []);

  function checkIsRecipeDone(arrayDoneRecipe, currentMeal) {
    const arrayLS = arrayDoneRecipe.some(
      (recipe) => recipe.id === Number(currentMeal.idMeal),
    );
    console.log(arrayLS);
    if (!arrayLS) {
      console.log('vrau');
      setIsRecipeDone(false);
    }
  }

  useEffect(() => {
    const localStorageDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (!localStorageDoneRecipes || localStorageDoneRecipes.length === 0) {
      console.log('entrou no if');
      setIsRecipeDone(false);
      return;
    } if (localStorageDoneRecipes && meal) {
      checkIsRecipeDone(localStorageDoneRecipes, meal);
    }
  }, [meal]);

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
  // useEffect(() => {
  //   localStorage.setItem('inProgressRecipes', JSON.stringify({
  //     meals: {
  //       52771: [],
  //     },
  //     cocktails: {
  //       178319: [],
  //     },
  //   }));
  // }, []);
  // function checkIsRecipeDone(InProgress, currentMeal) {
  //   const arrayLS = Object.keys(InProgress);
  //   arrayLS.some(
  //     (recipe) => recipe.id === Number(currentMeal.idMeal),
  //   );
  //   setIsRecipeDone(true);
  //   console.log(arrayLS);
  //   if (!arrayLS) {
  //     console.log('vrau');
  //     setIsRecipeDone(false);
  //   }
  // }

  // useEffect(() => {
  //   const inProgressRecipesLS = JSON.parse(localStorage.getItem('inProgressRecipes'));
  //   if (!inProgressRecipesLS || !inProgressRecipesLS.meals) {
  //     setInProgressRecipes(false);
  //     return;
  //   } if (inProgressRecipesLS && inProgressRecipesLS.meals) {
  //     // checkInProgressRecipes(inProgressRecipesLS.meals);
  //   }
  // }, []);

  return (
    <div>
      {meal && <RenderFoodDetails copyLink={ copyLink } />}
      <span>{click ? <p>Link copiado!</p> : null}</span>
      {meal && <RenderFoodIngred />}
      {meal && <RenderFoodInstruction />}
      {meal && <RenderFoodVideo />}
      {recomDrink && <RenderFoodRecomendation />}
      {isRecipeDone ? null : <StartRecipeButton type="comidas" id={ id } />}
      {/* {inProgressRecipes ? <ContinueRecipeButton /> : null} */}
    </div>
  );
}

FoodsDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default FoodsDetails;
