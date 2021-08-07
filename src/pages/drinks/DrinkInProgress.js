import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonShare from '../../components/ButtonShare';

export default function DrinkInProgress({ location }) {
  const [recipe, setRecipe] = useState();
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [measurementsArray, setMeasurementsArray] = useState([]);
  const { state } = location;

  const handleCheckbox = () => {
    
  }

  useEffect(() => {
    if (state && !recipe) {
      setRecipe(state);
    }
  }, [recipe, state]);

  useEffect(() => {
    if (!state) {
      const recipeId = window.location.pathname.split('/')[2];
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
      const getRecipe = async () => {
        console.log('passei');
        const data = await fetch(URL).then((r) => r.json()).then((d) => d.drinks[0]);
        console.log(data);
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
  }, [ingredientsArray, recipe]);

  if (recipe) {
    return (
      <section>
        <img
          src={ recipe.strDrinkThumb }
          alt={ recipe.idDrink }
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{ recipe.strDrink }</h1>
        <p data-testid="recipe-category">{ recipe.strCategory }</p>
        <ButtonShare path={ window.location.href } testid="share-btn" />
        <button
          type="button"
          data-testid="favorite-btn"
        >
          {'<3'}
        </button>
        <p>{ recipe.strAlcoholic }</p>
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
              {`${ingredient[1]} ${
                measurementsArray[index]
                  ? ` - ${measurementsArray[index][1]}`
                  : ''
              }`}
            </label>
          </div>
        ))}
        <h3>Instruções</h3>
        <p data-testid="instructions">{ recipe.strInstructions }</p>
        <button type="button" data-testid="finish-recipe-btn">
          Finalizar Receita
        </button>
      </section>
    );
  }
  return (<div>Carregando...</div>);
}

DrinkInProgress.propTypes = {
  strCategory: PropTypes.string,
  strDrink: PropTypes.string,
  idDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  strInstructions: PropTypes.string,
  strAlcoholic: PropTypes.string,
}.isRequired;
