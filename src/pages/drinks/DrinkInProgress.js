import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonShare from '../../components/ButtonShare';

export default function DrinkInProgress({ location }) {
  const [recipe, setRecipe] = useState();
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [measurementsArray, setMeasurementsArray] = useState([]);
  const [ingr, setIngr] = useState();
  const { state } = location;
  const recipeId = window.location.pathname.split('/')[2];
  const drinks = JSON.parse(localStorage.getItem('cocktails'));

  const checkSavedItens = (item) => {
    if (drinks[recipeId].length > 0) {
      return drinks[recipeId].some((ing) => ing === item)
      || (ingr && ingr[recipeId].some((ing) => ing === item));
    }
    return false;
  };

  const saveCheckedIngredientsInLocalStorage = ({ target }) => {
    const cocktails = JSON.parse(localStorage.getItem('cocktails'));
    let itemToSave;
    if (target.checked) {
      itemToSave = {
        ...cocktails,
        [recipeId]: [
          ...cocktails[recipeId],
          target.value,
        ],
      };
    } else {
      const ingArray = cocktails[recipeId].filter((item) => item !== target.value);
      itemToSave = {
        ...cocktails,
        [recipeId]: ingArray,
      };
    }
    setIngr(itemToSave);
    localStorage.setItem('cocktails', JSON.stringify(itemToSave));
  };

  const setLocalStorage = () => {
    if (!drinks) {
      return { [recipeId]: '' };
    }
    if (drinks && !drinks[recipeId]) {
      return { ...drinks, [recipeId]: [] };
    }
    return { ...drinks };
  };

  useEffect(() => {
    const obj = setLocalStorage();
    localStorage.setItem('cocktails', JSON.stringify(obj));
  }, []);

  useEffect(() => {
    if (state && !recipe) {
      setRecipe(state);
    }
  }, [recipe, state]);

  useEffect(() => {
    if (!state) {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
      const getRecipe = async () => {
        console.log('passei');
        const data = await fetch(URL).then((r) => r.json()).then((d) => d.drinks[0]);
        console.log(data);
        setRecipe(data);
      };
      getRecipe();
    }
  }, [recipeId, state]);

  useEffect(() => {
    const getItems = (searchedKey) => Object.entries(recipe).filter(
      (value) => value[0].includes(searchedKey) && value[1],
    ).map((item) => item[1]);
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
        <section>
          { ingredientsArray && ingredientsArray.map((ingredient, index) => (
            <div key={ index } data-testid={ `${index}-ingredient-step` }>
              <label key={ index } htmlFor={ `id${index}` }>
                <input
                  checked={ checkSavedItens(ingredient) }
                  id={ `id${index}` }
                  name="ingredient"
                  onChange={ saveCheckedIngredientsInLocalStorage }
                  key={ index }
                  type="checkbox"
                  value={ ingredient }
                />
                {`${ingredient} ${
                  measurementsArray[index]
                    ? ` - ${measurementsArray[index]}`
                    : ''
                }`}
              </label>
            </div>
          ))}
        </section>
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
