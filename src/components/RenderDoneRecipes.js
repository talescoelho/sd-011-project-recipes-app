import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function RenderDoneRecipes() {
  const [copyOk, setCopyOk] = useState(false);
  const [filterFoodRecipes, setFilterFoodRecipes] = useState(true);
  const [filterDrinkRecipes, setFilterDrinkRecipes] = useState(true);

  function resetFilters() {
    setFilterFoodRecipes(true);
    setFilterDrinkRecipes(true);
  }

  const allDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  let filteredDoneRecipes = allDoneRecipes;

  if (!filterFoodRecipes) {
    filteredDoneRecipes = allDoneRecipes.filter((recipe) => recipe.type === 'comida');
  }

  if (!filterDrinkRecipes) {
    filteredDoneRecipes = allDoneRecipes.filter((recipe) => recipe.type === 'bebida');
  }

  return (
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
      { filteredDoneRecipes.map((recipe, index) => (
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
          <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>
          <button
            type="button"
            //  data-testid={ `${index}-horizontal-share-btn` }
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
          { copyOk && <p>Link copiado!</p> }
          { recipe.type === 'comida' && recipe.tags.map((tag, index2) => (
            <p
              key={ index2 }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              { tag }
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RenderDoneRecipes;
