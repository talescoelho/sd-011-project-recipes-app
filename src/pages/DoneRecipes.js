import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

export default function DoneRecipes() {
  const pageTitle = {
    pageName: 'Receitas Feitas',
    setIcon: false,
  };
  const recipeStorage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const [doneRecipes, setDoneRecipes] = useState(recipeStorage);
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <Header value={ pageTitle } />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setDoneRecipes(recipeStorage) }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setDoneRecipes(recipeStorage
            .filter((recipes) => recipes.type === 'comida')) }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setDoneRecipes(recipeStorage
            .filter((recipes) => recipes.type === 'bebida')) }
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
                    onClick={ () => {
                      clipboardCopy(`http://localhost:3000/bebidas/${recipe.id}`);
                      setCopied(true);
                    } }
                  >
                    { copied ? <span>Link copiado!</span> : <img
                      src={ shareIcon }
                      alt="compartilhar"
                      data-testid={ `${index}-horizontal-share-btn` }
                    /> }
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
                    onClick={ () => {
                      clipboardCopy(`http://localhost:3000/comidas/${recipe.id}`);
                      setCopied(true);
                    } }
                  >
                    { copied ? <span>Link copiado!</span> : <img
                      src={ shareIcon }
                      alt="compartilhar"
                      data-testid={ `${index}-horizontal-share-btn` }
                    /> }
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
