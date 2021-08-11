import React from 'react';
// import copy from 'clipboard-copy';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

function Recipes() {
  const headerProps = {
    title: 'Receitas Feitas',
    enableSearchButton: true,
    enableProfileButton: true,
  };

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  return (
    <div>
      <Header props={ headerProps } />
      <button data-testid="filter-by-all-btn" type="button">All</button>
      <button data-testid="filter-by-food-btn" type="button">Food</button>
      <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      { doneRecipes && doneRecipes.map((recipe, index) => (
        <div className="supply-card" key={ index }>
          <img
            data-testid={ `${index}-horizontal-image` }
            alt={ recipe.name }
            src={ recipe.image }
          />
          <p data-testid={ `${index}-horizontal-top-text` }>{ recipe.category }</p>
          <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
          <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>
          <button
            onClick={ () => {
              alert('Link copiado!');
              // copy(`http://localhost:3000${pathname}`);
              // setHidden(false);
            } }
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
          >
            <img src={ shareIcon } alt="shareIcon" />
          </button>
          { recipe.tags.map((tag) => (
            <p data-testid={ `${index}-${tag}-horizontal-tag` } key={ tag }>
              { tag }
            </p>))}
        </div>
      )) }
    </div>
  );
}

export default Recipes;
