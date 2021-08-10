import React, { useEffect, useState } from 'react';
import FetchApi from '../services/ApiFetch';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';

export default function DrinksRecipiesInProcess(props) {
  const [DoRecipe, setDoRecipe] = useState();
  const [recipeId, setRecipeId] = useState([]);
  const { match: { params: { id } } } = props;

  useEffect(() => {
    async function test() {
      const obj = await FetchApi('thecocktaildb', null, null, ['details', id]);
      setDoRecipe(obj);
    }
    test();
  }, []);

  useEffect(() => {
    const getRecipesLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    function test(ola) {
      if (!recipeId.length > 0) {
        return setRecipeId(ola);
      }
      console.log(recipeId);
    }
    test(getRecipesLocalStorage);
  }, [recipeId]);
  const oi = document.getElementById('id1');
  console.log(oi);

  function changeRow(event, igredientIndex) {
    if (event.target.closest(`#id${igredientIndex}`).classList[0] === undefined) {
      const getKey = JSON.parse(localStorage.getItem('inProgressRecipes') || '[]');
      event.target.closest(`#id${igredientIndex}`).classList.add('do-row');
      const getDiv = document.getElementById(`id${igredientIndex}`).id;
      getKey.push(`${getDiv}`);
      localStorage.setItem('inProgressRecipes', JSON.stringify(getKey));
      return;
    }
    return event.target.closest(`#id${igredientIndex}`).classList.remove('do-row');
  }

  return (
    <div>
      { DoRecipe
        ? (
          <div>
            <h1 data-testid="recipe-title">{ DoRecipe.drinks[0].strDrink }</h1>
            <img
              src={ DoRecipe.drinks[0].strDrinkThumb }
              alt={ DoRecipe.drinks[0].strDrink }
              data-testid="recipe-photo"
            />
            <ShareBtn />
            <FavoriteBtn />
            <p data-testid="recipe-category">{ DoRecipe.drinks[0].strCategory }</p>
            <ul id="input-checkbox">
              { Object.entries(DoRecipe.drinks[0])
                .filter((igredients) => igredients[0]
                  .includes('strIngredient') && igredients[1])
                .map((e, igredientIndex) => (
                  <li
                    data-testid={ `${igredientIndex}-ingredient-step` }
                    key={ igredientIndex }
                    id={ `id${igredientIndex}` }
                  >
                    <label
                      htmlFor={ `for${igredientIndex}` }
                    >
                      {e[1]}
                      <input
                        id={ `for${igredientIndex}` }
                        type="checkbox"
                        onClick={ (event) => changeRow(event, igredientIndex) }
                      />
                    </label>
                  </li>
                )) }
            </ul>
            <p data-testid="instructions">
              { DoRecipe.drinks[0].strInstructions }
            </p>
            <button data-testid="finish-recipe-btn" type="button">Finalizar</button>
          </div>)

        : 'Loading...'}
    </div>
  );
}
