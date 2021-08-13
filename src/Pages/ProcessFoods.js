import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ShareButton from '../Components/ShareButton';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import './Styles/ProcessFoods.css';

export default function ProcessFoods({ match: { params: { id } } }) {
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
    const arrayIndredientKids = Object.keys(recipes)
      .filter((item) => item
        .includes('strIngredient'));
    const ingredients = [];
    arrayIndredientKids.forEach((key) => {
      if (recipes[key]) {
        ingredients.push(recipes[key]);
      }
    });
    return ingredients;
  };
  // retorna um array com as medidas de cada ingredientes
  const ingredientsMesure = () => {
    const arrayIndredientKids = Object.keys(recipes)
      .filter((item) => item
        .includes('strMeasure'));
    const ingredients2 = [];
    arrayIndredientKids.forEach((key) => {
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

  return (
    <div>
      <img
        id="img-recipe"
        src={ recipes.strMealThumb }
        data-testid="recipe-photo"
        alt="Imagem da receita"
      />
      <h2 data-testid="recipe-title">{ recipes.strMeal }</h2>
      <ShareButton />
      <img src={ whiteHeartIcon } alt="Favoritar Coração" data-testid="favorite-btn" />
      <h3 data-testid="recipe-category">{ recipes.strCategory }</h3>
      <h3>Ingredients</h3>
      <ul>
        { concatIngredientWithMesure()
          .map((igredient, index) => (
            <label
              key={ index }
              data-testid={ `${index}-ingredient-step` }
              htmlFor={ igredient[index] }
            >
              <input type="checkbox" id={ igredient[index] } />
              {' '}
              { igredient }
            </label>)) }
      </ul>
      <h3 data-testid="instructions">Instructions</h3>
      <p>{recipes.strInstructions}</p>
      <button
        id="start-recipe-btn"
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar Receita
      </button>
    </div>
  );
}

ProcessFoods.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
