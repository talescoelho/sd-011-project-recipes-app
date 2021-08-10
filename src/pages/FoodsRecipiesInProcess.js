import React, { useEffect, useState } from 'react';
import FetchApi from '../services/ApiFetch';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';

export default function FoodsRecipiesInProcess(props) {
  const [DoRecipe, setDoRecipe] = useState();
  const [recipeId, setRecipeId] = useState([]);
  const { match: { params: { id } } } = props;

  useEffect(() => {
    async function test() {
      const obj = await FetchApi('themealdb', null, null, ['details', id]);
      setDoRecipe(obj);
    }
    test();
  }, []);

  useEffect(() => {
    const getRecipesLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    function test(ola) {
      if (!recipeId) {
        return setRecipeId(ola);
      }
      console.log(recipeId);
    }
    test(getRecipesLocalStorage);
  }, [recipeId]);

  function changeRow(event, igredientIndex) {
    if (event.target.parentNode.classList[1] === undefined) {
      console.log(event.target);
      const getKey = JSON.parse(localStorage.getItem('inProgressRecipes') || '[]');
      event.target.parentNode.classList.add('do-row');
      const getDiv = document.getElementById(`id1${igredientIndex}`).id;
      getKey.push(`${getDiv}`);
      localStorage.setItem('inProgressRecipes', JSON.stringify(getKey));
      return;
    }
    return event.target.closest(`#id1${igredientIndex}`).classList.remove('do-row');
  }

  function teste() {
    const olol = document.querySelector('.ul-container');
    return console.log(olol);
  }

  return (
    <div>
      { DoRecipe
        ? (
          <div>
            <h1 data-testid="recipe-title">{ DoRecipe.meals[0].strMeal }</h1>
            <img
              src={ DoRecipe.meals[0].strMealThumb }
              alt={ DoRecipe.meals[0].strMeal }
              data-testid="recipe-photo"
            />
            <ShareBtn />
            <FavoriteBtn />
            <p data-testid="recipe-category">{ DoRecipe.meals[0].strCategory }</p>
            <div className="ul-container">
              <ul id="input-checkbox">
                { Object.entries(DoRecipe.meals[0])
                  .filter((igredients) => igredients[0]
                    .includes('strIngredient') && igredients[1])
                  .map((e, igredientIndex) => (
                    <li
                      data-testid={ `${igredientIndex}-ingredient-step` }
                      key={ igredientIndex }
                    >
                      <label
                        className="li-test"
                        id={ `id1${igredientIndex}` }
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
            </div>
            {teste()}
            <p data-testid="instructions">
              { DoRecipe.meals[0].strInstructions }
            </p>
            <button data-testid="finish-recipe-btn" type="button">Finalizar</button>
          </div>)

        : 'Loading...'}
    </div>
  );
}
