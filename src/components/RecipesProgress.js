import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesAppContext from '../context/RecipesAppContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../styles/RecipesProgress.css';

function RecipesProgress() {
  // Pega o path id exato USAR MAIS A FRENTE NO PROJETO
  // const { location } = history;
  // const { pathname } = location;
  // const pathSet = pathname.replace('/in-progress', '');
  // const id = pathname.split('/')[2];
  // console.log(id);
  const { mealRecipes } = useContext(RecipesAppContext);

  // Atalho para criar loading enquanto página não carrega
  const loading = <p>Loading...</p>;

  // Função para filtrar os ingredientes
  function returnIngredients() {
    if (mealRecipes[0]) {
      const ingredients = (mealRecipes.length === 0) ? ''
        : Object.keys(mealRecipes[0])
          .filter((item) => item.includes('strIngredient'))
          .map((itens) => mealRecipes[0][itens])
          .filter((itensFiltereds) => itensFiltereds);
      // const returnIngredients = mealRecipes.filter((itens) => itens.includes())
      return ingredients;
    }
  }

  const checkBox = returnIngredients();

  function handleChangeCheck({ target }) {
    target.parentElement.classList.toggle('risk');
  }

  console.log(mealRecipes);

  return (
    <div>
      <h1>Detalhes de Comida</h1>
      {mealRecipes.length > 0
        ? (
          <div>
            <h2 data-testid="recipe-title">{mealRecipes[0].strMeal}</h2>
            <img
              src={ mealRecipes[0].strMealThumb }
              data-testid="recipe-photo"
              alt={ mealRecipes[0].strMeal }
            />
            <button data-testid="share-btn" type="button">
              <img src={ shareIcon } alt="share icon" />
            </button>
            <button data-testid="favorite-btn" type="button">
              <img src={ whiteHeartIcon } alt="favorite icon" />
            </button>
            <p data-testid="recipe-category">{mealRecipes[0].strCategory}</p>
            <h3>Ingredients</h3>
            {checkBox.map((itens, key) => (
              <label
                htmlFor={ key }
                key={ key }
              >
                <input
                  type="checkbox"
                  id={ key }
                  onClick={ (e) => handleChangeCheck(e) }
                />
                {itens}
              </label>))}

            <p data-testid="instructions">{mealRecipes[0].strInstructions}</p>
            <Link to="/receitas-feitas">
              <button
                type="button"
                data-testid="finish-recipe-btn"
              >
                Finalizar Receita
              </button>
            </Link>
          </div>) : (
          loading
        )}
    </div>
  );
}

export default RecipesProgress;
