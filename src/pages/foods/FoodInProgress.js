import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonShare from '../../components/ButtonShare';

export default function FoodInProgress({ location }) {
  const [recipe, setRecipe] = useState();
  const [ingredientsArray, setIngredientsArray] = useState();
  const [measurementsArray, setMeasurementsArray] = useState();
  const { state } = location;

  useEffect(() => {
    if (state && !recipe) {
      setRecipe(state);
    }
  }, [recipe, state]);

  useEffect(() => {
    if (!state) {
      const recipeId = window.location.pathname.split('/')[2];
      const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
      const getRecipe = async () => {
        console.log('passei');
        const data = await fetch(URL).then((r) => r.json()).then((d) => d.meals[0]);
        setRecipe(data);
      };
      getRecipe();
    }
  }, [state]);

  useEffect(() => {
    const getItems = (searchedKey) => Object.entries(recipe).filter(
      (value) => value[0].includes(searchedKey) && value[1],
    );

    if (recipe) {
      const ingredients = getItems('Ingredient');
      const measures = getItems('Measure');
      setIngredientsArray(ingredients);
      setMeasurementsArray(measures);
    }
  }, [recipe]);

  if (recipe) {
    return (
      <section>
        <img
          src={ recipe.strMealThumb }
          alt={ recipe.idMeal }
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">
          { recipe.strMeal }
        </h1>
        <p data-testid="recipe-category">{ recipe.strCategory }</p>
        <ButtonShare
          path={ window.location.href }
          testid="share-btn"
        />
        <button
          type="button"
          data-testid="favorite-btn"
        >
          {'<3'}
        </button>
        <h3>Receita</h3>
        { ingredientsArray && ingredientsArray.map((ingredient, index) => (
          <div key={ index } data-testid={ `${index}-ingredient-step` }>
            <label key={ index } htmlFor={ `id${index}` }>
              <input
                id={ `id${index}` }
                key={ index }
                type="checkbox"
                value={ ingredient[1] }
              />
              { `${ingredient[1]} - ${measurementsArray[index][1]}` }
            </label>
          </div>
        )) }
        <h3>
          Instruções
        </h3>
        <p data-testid="instructions">{ recipe.strInstructions }</p>
        <button
          type="button"
          data-testid="finish-recipe-btn"
        >
          Finalizar Receita
        </button>
      </section>
    );
  }
  return (<div>Carregando...</div>);
}

FoodInProgress.propTypes = {
  strCategory: PropTypes.string,
  strMeal: PropTypes.string,
  idMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
  strInstructions: PropTypes.string,
  strAlcoholic: PropTypes.string,
}.isRequired;
