import React, { useState } from 'react';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

export default function DoneRecipes() {
  const pageTitle = {
    pageName: 'Receitas Feitas',
    setIcon: false,
  };
  const recipeStorage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const [doneRecipes, setDoneRecipes] = useState(recipeStorage);
  return (
    <div>
      <Header value={ pageTitle } />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => console.log(setDoneRecipes) }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
      <div>
        {
          doneRecipes.map((recipe, index) => (
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              {recipe.type === 'bebida' ? (
                <div>
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    src={ recipe.image }
                    alt={ recipe.name }
                  />
                  <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    { recipe.alcoholicOrNot }
                  </p>
                  <p data-testid={ `${index}-horizontal-done-date` }>
                    Feito em:
                    { recipe.doneDate }
                  </p>
                  <button
                    type="button"
                  >
                    <img
                      src={ shareIcon }
                      alt="compartilhar"
                      data-testid={ `${index}-horizontal-share-btn` }
                    />
                  </button>
                </div>
              ) : (
                <div>
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    src={ recipe.image }
                    alt={ recipe.name }
                  />
                  <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    { `${recipe.area} - ${recipe.category}` }
                  </p>
                  <p data-testid={ `${index}-horizontal-done-date` }>
                    Feito em:
                    { recipe.doneDate }
                  </p>
                  <button
                    type="button"
                  >
                    <img
                      src={ shareIcon }
                      alt="compartilhar"
                      data-testid={ `${index}-horizontal-share-btn` }
                    />
                  </button>
                  {
                    recipe.tags.map((tag, idx) => (
                      <p
                        key={ idx }
                        data-testid={ `${index}-${tag}-horizontal-tag` }
                      >
                        { tag }
                      </p>
                    ))
                  }
                </div>
              ) }
            </div>
          ))
        }
      </div>
    </div>
  );
}
