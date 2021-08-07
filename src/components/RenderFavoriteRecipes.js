import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

function RenderFavoriteRecipes() {
  const [copyOk, setCopyOk] = useState(false);
  const [filterFoodRecipes, setFilterFoodRecipes] = useState(true);
  const [filterDrinkRecipes, setFilterDrinkRecipes] = useState(true);
  const setMakeMeRender = useState(0)[1]; //  Estado local adicionado apenas realizar uma re-renderização. Pensar em maneira mais eficientes de resolver o problema!

  function resetFilters() {
    setFilterFoodRecipes(true);
    setFilterDrinkRecipes(true);
  }

  const allFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  let filteredFavoriteRecipes = allFavoriteRecipes;

  if (!filterFoodRecipes) {
    filteredFavoriteRecipes = allFavoriteRecipes.filter((recipe) => (
      recipe.type === 'comida'));
  }

  if (!filterDrinkRecipes) {
    filteredFavoriteRecipes = allFavoriteRecipes.filter((recipe) => (
      recipe.type === 'bebida'));
  }

  function removeFromStorage(recipe) {
    const compareRecipeId = recipe.id;
    const updatedFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'))
      .filter(({ id }) => id !== compareRecipeId);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavoriteRecipes));
    setMakeMeRender();
  }

  if (filteredFavoriteRecipes.length !== 0) {
    return (
      <div>
        <div>
          <section>
            <button
              type="button"
              data-testid="filter-by-all-btn"
              onClick={ resetFilters }
            >
              All
            </button>
            <button
              type="button"
              data-testid="filter-by-food-btn"
              onClick={ () => setFilterFoodRecipes(!filterFoodRecipes) }
            >
              Food
            </button>
            <button
              type="button"
              data-testid="filter-by-drink-btn"
              onClick={ () => setFilterDrinkRecipes(!filterDrinkRecipes) }
            >
              Drinks
            </button>
          </section>
          { filteredFavoriteRecipes.map((recipe, index) => (
            <div key={ index }>
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <img
                  src={ recipe.image }
                  alt={ recipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  width="50px"
                />
              </Link>
              <p data-testid={ `${index}-horizontal-top-text` }>
                { recipe.type === 'comida'
                  ? `${recipe.area} - ${recipe.category}`
                  : recipe.alcoholicOrNot }
              </p>
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
              </Link>
              <button
                type="button"
                onClick={ () => {
                  copy(`http://localhost:3000/${recipe.type}s/${recipe.id}`);
                  setCopyOk(true);
                } }
              >
                <img
                  data-testid={ `${index}-horizontal-share-btn` }
                  src={ shareIcon }
                  alt="share"
                />
              </button>
              <button
                type="button"
                onClick={ () => removeFromStorage(recipe) }
              >
                <img
                  src={ favoriteIcon }
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  alt="share"
                />
              </button>
              { copyOk && <p>Link copiado!</p> }
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <p>Ainda não existem receitas favoritadas!</p>;
}

export default RenderFavoriteRecipes;
