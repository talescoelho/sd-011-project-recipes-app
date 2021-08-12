import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getDrinkDetail, getDrinkRecomendations } from '../services/theCockTailAPI';
import { getMealDetail, getMealRecomendations } from '../services/theMealAPI';
import Recommendations from '../components/Recommendations';
import VerifyStart from '../components/VerifyStart';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import RecipeDetailsCategory from '../components/RecipeDetailsCategory';
import RecipeDetailsIframe from '../components/RecipeDetailsIframe';

function RecipeDetails({ match: { params: { id } } }) {
  const [recipeData, setRecipeData] = useState({ strYoutube: '' });
  const [recomendedRecipe, setRecomendedRecipe] = useState([]);
  const MAX_RESULTS = 6;
  const { pathname } = useLocation();
  const recipeType = pathname.includes('comidas') ? 'comida' : 'bebida';
  const {
    strDrink,
    strMeal,
    strDrinkThumb,
    strMealThumb,
    strCategory,
    strInstructions,
    strAlcoholic,
    strYoutube,
  } = recipeData;
  const MAX_INGREDIENTS = 20;
  const thumb = strDrinkThumb || strMealThumb;
  const title = strDrink || strMeal;

  useEffect(() => {
    if (recipeType === 'bebida') {
      const getDataDrinkDetail = async () => {
        const data = await getDrinkDetail(id);
        setRecipeData(...data);
      };
      getDataDrinkDetail();
    } else {
      const getFoodDetail = async () => {
        const data = await getMealDetail(id);
        setRecipeData(...data);
      };
      getFoodDetail();
    }
  }, [id, recipeType]);

  useEffect(() => {
    if (recipeType === 'bebida') {
      const fetchRecomended = async () => {
        const recomendedArray = await getMealRecomendations();
        setRecomendedRecipe(recomendedArray);
      };
      fetchRecomended();
    } else {
      const fetchRecomended = async () => {
        const recomendedArray = await getDrinkRecomendations();
        setRecomendedRecipe(recomendedArray);
      };
      fetchRecomended();
    }
  }, [recipeType]);

  function listIngredients() {
    const list = [];
    for (let index = 1; index <= MAX_INGREDIENTS; index += 1) {
      if (recipeData[`strIngredient${index}`]) {
        list.push(
          `${recipeData[`strIngredient${index}`]} - ${recipeData[`strMeasure${index}`]}`,
        );
      }
    }
    return list;
  }

  function renderDetails() {
    return (
      <section>
        <img data-testid="recipe-photo" src={ thumb } alt={ title } />
        <h2 data-testid="recipe-title">{ title }</h2>
        <ShareButton link={ window.location.href } />
        <FavoriteButton recipeData={ recipeData } type={ recipeType } />
        <RecipeDetailsCategory
          strAlcoholic={ strAlcoholic }
          strCategory={ strCategory }
        />
        <ol>
          {
            listIngredients().map((ingredient, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { `${ingredient}` }
              </li>
            ))
          }
        </ol>
        <p data-testid="instructions">{strInstructions}</p>
        <RecipeDetailsIframe recipeType={ recipeType } strYoutube={ strYoutube } />
        <Recommendations recommendations={ recomendedRecipe.slice(0, MAX_RESULTS) } />
        <VerifyStart id={ id } />
      </section>
    );
  }

  return (
    <div>{ recipeData && renderDetails() }</div>
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.shape(PropTypes.any).isRequired,
};

export default RecipeDetails;
