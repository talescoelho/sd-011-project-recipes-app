import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import ShareButton from '../Components/ShareButton';
import './Styles/FoodDetails.css';
import checkInProgress from '../Services/checkInProgress';

function FoodDetails({ match: { params: { id } } }) {
  const [recipes, setRecipes] = useState([]);

  // Didmount - Faz fetch trazendo a receita pelo id e seta o stado recipes com as receita
  useEffect(() => {
    const getApi = async () => {
      const endPoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await fetch(endPoint);
      const results = await response.json();
      const meals = results.meals[0];
      setRecipes(meals);
    };
    getApi();
  }, [id]);

  // retorna o array com os ingredientes
  const ingredientsRecipe = () => {
    const arrayIngredientKeys = Object.keys(recipes)
      .filter((item) => item
        .includes('strIngredient'));
    const ingredients = [];
    arrayIngredientKeys.forEach((key) => {
      if (recipes[key]) {
        ingredients.push(recipes[key]);
      }
    });
    return ingredients;
  };
  // retorna um array com as medidas de cada ingredientes
  const ingredientsMesure = () => {
    const arrayIngredientKeys = Object.keys(recipes)
      .filter((item) => item
        .includes('strMeasure'));
    const ingredients2 = [];
    arrayIngredientKeys.forEach((key) => {
      if (recipes[key]) {
        ingredients2.push(recipes[key]);
      }
    });
    return ingredients2;
  };
  // retorna a concatenação do retorno da função ingredientsMesure com ingredientsRecipe
  const concatIngredientWithMesure = () => {
    const newArray = [];
    for (let index = 0; index < ingredientsRecipe().length; index += 1) {
      newArray.push(`-${ingredientsRecipe()[index]} - ${ingredientsMesure()[index]}`);
    }
    return newArray;
  };

  checkInProgress();
  const checkStart = () => {
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgress && Object.keys(inProgress.meals)
      .find((key) => key === recipes.idMeal)) {
      return 'Continuar Receita';
    }
    return 'Iniciar Receita';
  };

  return (
    <div>
      <img
        className="img-recipe"
        src={ recipes.strMealThumb }
        data-testid="recipe-photo"
        alt="Imagem da receita"
      />
      <h2 data-testid="recipe-title">{ recipes.strMeal }</h2>
      <ShareButton idRecipe={ `comidas/${recipes.idMeal}` } />
      <img src={ whiteHeartIcon } alt="Favoritar Coração" data-testid="favorite-btn" />
      <h3 data-testid="recipe-category">{ recipes.strCategory }</h3>
      <h3>Ingredients</h3>
      <ul>
        {
          concatIngredientWithMesure()
            .map((igredient, index) => (
              <li
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ index }
              >
                {igredient}
              </li>
            ))
        }
      </ul>
      <h3>Instructions</h3>
      <p data-testid="instructions">{recipes.strInstructions}</p>
      <h3>Video</h3>
      <div>
        <ReactPlayer
          data-testid="video"
          url={ recipes.strYoutube }
        />
      </div>
      {/* <h3 data-testid={ `${index}-recomendation-card"` }>Recomendadas</h3> */}
      <div id="recommended"><h4>oi</h4></div>
      <Link to={ `/comidas/${recipes.idMeal}/in-progress` } params={ recipes.idMeal }>
        <button
          id="start-recipe-btn"
          className="start-recipe-btn"
          type="button"
          data-testid="start-recipe-btn"
        >
          { checkStart() }
        </button>
      </Link>
    </div>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default FoodDetails;
