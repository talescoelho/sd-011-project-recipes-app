import React from 'react';
import copy from 'clipboard-copy';
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
        <img
          data-testid={ `${index}-horizontal-image` }
          alt={ doneRecipess.name }
          src={ doneRecipess.image }
        />
        <p data-testid={ `${index}-horizontal-name` }>{doneRecipess.name}</p>
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
    return (
      <div className="supply-card" key={ index }>
        <img
          data-testid={ `${index}-horizontal-image` }
          alt={ doneRecipess.name }
          src={ doneRecipess.image }
        />
        <p data-testid={ `${index}-horizontal-name` }>{doneRecipess.name}</p>
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

  return (
    <div>
      <Header props={ headerProps } />
      <button data-testid="filter-by-all-btn" type="button">All</button>
      <button data-testid="filter-by-food-btn" type="button">Food</button>
      <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      { doneRecipes && doneRecipes.map((recipe, index) => {
        console.log(recipe);
        if (recipe.type === 'comida') {
          return renderMealRecipe(recipe, index);
        }
        if (recipe.type === 'bebida') {
          return renderDrinkRecipe(recipe, index);
        }
        return null;
      })}
    </div>
  );
}

export default Recipes;
