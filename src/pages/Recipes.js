import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

function Recipes() {
  const headerProps = {
    title: 'Receitas Feitas',
    enableSearchButton: true,
    enableProfileButton: true,
  };

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  function renderMealRecipe(doneRecipess, index) {
    return (
      <div className="supply-card" key={ index }>
        <Link to={ `/${doneRecipess.type}s/${doneRecipess.id}` }>
          <img
            data-testid={ `${index}-horizontal-image` }
            alt={ doneRecipess.name }
            src={ doneRecipess.image }
          />
          <p data-testid={ `${index}-horizontal-name` }>{doneRecipess.name}</p>
        </Link>
        <p data-testid={ `${index}-horizontal-top-text` }>
          {doneRecipess.area }
          {' '}
          -
          {' '}
          { doneRecipess.category}
        </p>
        <p data-testid={ `${index}-horizontal-done-date` }>{doneRecipess.doneDate}</p>
        <button
          onClick={ () => {
            alert('Link copiado!');
            copy(`http://localhost:3000/${doneRecipess.type}s/${doneRecipess.id}`);
          } }
          src={ shareIcon }
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
        >
          <img src={ shareIcon } alt="shareIcon" />
        </button>
        { doneRecipess.tags.map((tag, index2) => {
          if (index2 <= 1) {
            return (
              <p data-testid={ `${index}-${tag}-horizontal-tag` } key={ tag }>
                { tag}
              </p>
            );
          }
          return null;
        })}
      </div>
    );
  }

  function renderDrinkRecipe(doneRecipess, index) {
    console.log(index);
    return (
      <div className="supply-card" key={ index }>
        <Link to={ `/${doneRecipess.type}s/${doneRecipess.id}` }>
          <img
            data-testid={ `${index}-horizontal-image` }
            alt={ doneRecipess.name }
            src={ doneRecipess.image }
          />
          <p data-testid={ `${index}-horizontal-name` }>{doneRecipess.name}</p>
        </Link>
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          {doneRecipess.alcoholicOrNot}
        </p>
        <p data-testid={ `${index}-horizontal-done-date` }>{doneRecipess.doneDate}</p>
        <button
          src={ shareIcon }
          onClick={ () => {
            alert('Link copiado!');
            copy(`http://localhost:3000/${doneRecipess.type}s/${doneRecipess.id}`);
          } }
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
        >
          <img src={ shareIcon } alt="shareIcon" />
        </button>
      </div>
    );
  }

  const [filters, setFilters] = useState({
    Food: true,
    Drinks: true,
  });
  const MINUS_ONE = -1;
  let index = MINUS_ONE;
  return (
    <div>
      <Header props={ headerProps } />
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ () => setFilters({ Food: true, Drinks: true }) }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ () => setFilters({ Food: true, Drinks: false }) }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ () => setFilters({ Food: false, Drinks: true }) }
      >
        Drinks
      </button>
      { doneRecipes && doneRecipes.map((recipe) => {
        if (recipe.type === 'comida' && filters.Food) {
          index += 1;
          return renderMealRecipe(recipe, index);
        }
        if (recipe.type === 'bebida' && filters.Drinks) {
          index += 1;
          return renderDrinkRecipe(recipe, index);
        }
        return null;
      })}
    </div>
  );
}

export default Recipes;
