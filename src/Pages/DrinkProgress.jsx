import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getDrinkByID } from '../Services/ApiDrink';

function DrinkProgress(props) {
  const [drinkById, setDrinkById] = useState([]);
  const [drinkIngredient, setDrinkIngredient] = useState([]);
  const [button, setButton] = useState(false);
  const [inProgressRecipe, setInProgressRecipe] = useState({});
  const { match } = props;
  const { id } = match.params;

  async function fetchDrinkByID() {
    const drinkByIdAPI = await getDrinkByID(id);
    setDrinkById(drinkByIdAPI.drinks);
  }

  // console.log(drinkById);

  useEffect(() => {
    drinkById.forEach((ingredient) => {
      const data = [];
      const number = 15;
      Object.entries(ingredient).filter((item) => {
        for (let index = 0; index <= number; index += 1) {
          if (item.includes(`strIngredient${index}`) && item[1]) {
            data.push(Object.values(item).splice(1, 1));
          }
        }
        return data;
      });
      console.log(data);
      setDrinkIngredient(data);
    });
  }, [drinkById]);

  function ingredientsChecked() {
    let sum = 0;
    const checkeds = document.getElementsByTagName('input');
    for (let index = 0; index < checkeds.length; index += 1) {
      if (checkeds[index].checked) {
        sum += 1;
        // console.log(sum);
        if (sum === checkeds.length) {
          setButton(true);
        } else setButton(false);
      }
    }
    return button;
  }

  // Para pegar a data utilizamos como base o código desse link:
  // https://pt.stackoverflow.com/questions/6526/como-formatar-data-no-javascript
  function handleCLick() {
    function dataAtualFormatada() {
      const data = new Date();
      const dia = data.getDate().toString();
      const diaF = (dia.length === 1) ? `0${dia}` : dia;
      const mes = (data.getMonth() + 1).toString();
      const mesF = (mes.length === 1) ? `0${mes}` : mes;
      const anoF = data.getFullYear();
      return `${diaF}/${mesF}/${anoF}`;
    }
    const now = dataAtualFormatada();
    setDrinkById(drinkById[0].doneDate = now);
    const doneRecipes = drinkById.map((drink) => ({
      id: drink.idDrink,
      type: 'bebida',
      area: drink.strArea,
      category: drink.strCategory,
      alcoholicOrNot: drink.strAlcoholic,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      doneDate: now,
      tags: [drink.strTags],
    }));
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  }

  const getStorage = (storageItem) => JSON
    .parse(localStorage.getItem(storageItem));

  const setStorage = (storageItem, value) => localStorage
    .setItem(storageItem, JSON.stringify(value));

  useEffect(() => {
    fetchDrinkByID();
    const recipesInProgress = getStorage('inProgressRecipes') || {};
    setInProgressRecipe(recipesInProgress);
  }, []);

  const addIngredientStorage = (value, storageIngredient) => {
    const realoadItem = {
      ...storageIngredient,
      [id]: [
        ...(storageIngredient[id] || []),
        value,
      ].sort(),
    };

    setStorage('inProgressRecipes', realoadItem);
    setInProgressRecipe(realoadItem);
  };

  const removeingredientStorage = (value, storageItem) => {
    const realoadItem = {
      ...storageItem,
      [id]: storageItem[id].filter((item) => item !== value),
    };
    if (realoadItem[id].length === 0) delete realoadItem[id];
    setStorage('inProgressRecipes', realoadItem);
    setInProgressRecipe(realoadItem);
  };

  const ingredientsDone = (target, index) => {
    const recipesInProgress = getStorage('inProgressRecipes') || {};
    if (target.checked) addIngredientStorage(index, recipesInProgress);
    else removeingredientStorage(index, recipesInProgress);
  };

  return (
    <div>
      { drinkById.map((item, index) => (
        <div key={ index }>
          <img
            data-testid="recipe-photo"
            src={ item.strDrinkThumb }
            alt={ `Drink ${item.strDrink}` }
            width="80"
          />
          <h2 data-testid="recipe-title">
            { item.strDrink }
          </h2>
          <h3 data-testid="recipe-category">
            { item.strCategory }
          </h3>
          <ul>
            {
              drinkIngredient.map((ingredient, i) => (
                <li
                  data-testid={ `${i}-ingredient-step` }
                  key={ i }
                >
                  <label
                    htmlFor={ i }
                  >
                    <input
                      name={ Object.values(ingredient) }
                      id={ i }
                      type="checkbox"
                      checked={ inProgressRecipe[id]
                        && inProgressRecipe[id].includes(i + 1) }
                      onChange={ ({ target }) => ingredientsDone(target, i + 1) }
                      onClick={ () => ingredientsChecked() }
                    />
                    { Object.values(ingredient) }
                  </label>
                </li>
              ))
            }
          </ul>
          <p data-testid="instructions">
            { item.strInstructions }
          </p>
        </div>
      )) }
      <div>
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="finish-recipe-btn"
            disabled={ !button }
            onClick={ () => handleCLick() }
          >
            Finish
          </button>
        </Link>
        <button
          type="button"
          data-testid="favorite-btn"
        >
          Favorite
        </button>
        <button
          type="button"
          data-testid="share-btn"
        >
          Share
        </button>
      </div>
    </div>
  );
}

DrinkProgress.propTypes = {
  match: PropTypes.object,
  params: PropTypes.shape({
    id: PropTypes.number,
  }),
}.isRequired;

export default DrinkProgress;
