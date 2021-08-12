import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFoodsByID } from '../Services/ApiFood';

function FoodProgress(props) {
  const [foodById, setFoodById] = useState([]);
  const [foodIngredient, setFoodIngredient] = useState([]);
  const [button, setButton] = useState(false);
  const [inProgressRecipe, setInProgressRecipe] = useState({});
  const { match } = props;
  const { id } = match.params;

  async function fetchFoodsByID() {
    const foodByIdAPI = await getFoodsByID(id);
    setFoodById(foodByIdAPI.meals);
  }

  // console.log(foodById);

  useEffect(() => {
    foodById.forEach((ingredient) => {
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
      // console.log(data);
      setFoodIngredient(data);
    });
  }, [foodById]);

  function ingredientsChecked() {
    let sum = 0;
    const checkeds = document.getElementsByTagName('input');
    for (let index = 0; index < checkeds.length; index += 1) {
      if (checkeds[index].checked === true) {
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
    const doneRecipes = foodById.map((food) => ({
      id: food.idMeal,
      type: 'comida',
      area: food.strArea,
      category: food.strCategory,
      alcoholicOrNot: '',
      name: food.strMeal,
      image: food.strMealThumb,
      doneDate: now,
      tags: [food.strTags],
    }));
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  }

  const getStorage = (storageItem) => JSON
    .parse(localStorage.getItem(storageItem));

  const setStorage = (storageItem, value) => localStorage
    .setItem(storageItem, JSON.stringify(value));

  useEffect(() => {
    fetchFoodsByID();
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
      { foodById.map((item, index) => (
        <div key={ index }>
          <img
            data-testid="recipe-photo"
            src={ item.strMealThumb }
            alt={ `Food ${item.strMeal}` }
            width="80"
          />
          <h2 data-testid="recipe-title">
            { item.strMeal }
          </h2>
          <h3 data-testid="recipe-category">
            { item.strCategory }
          </h3>
          <ul>
            {
              foodIngredient.map((ingredient, i) => (
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

FoodProgress.propTypes = {
  match: PropTypes.object,
  params: PropTypes.shape({
    id: PropTypes.number,
  }),
}.isRequired;

export default FoodProgress;
