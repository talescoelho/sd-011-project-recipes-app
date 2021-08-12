import React from 'react';

export default function RecipeDone() {
  const storage = JSON.parse(localStorage.getItem('doneRecipes'));

  console.log('localStorage', storage);
  if (storage) {
    return (
      <div>
        { storage.map((recipe, index) => (
          <div key={ index }>
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ recipe.image }
              alt={ `recipe ${recipe.name}` }
              width="80"
            />
            <p data-testid={ `${index}-horizontal-top-text` }>
              { `${recipe.area} - ${recipe.category}` }
            </p>
            <h3 data-testid={ `${index}-horizontal-name` }>
              { recipe.name }
            </h3>
            <p data-testid={ `${index}-horizontal-done-date` }>
              { recipe.doneDate }
            </p>
            <button
              type="button"
              data-testid={ `${index}-horizontal-share-btn` }
            >
              Share
            </button>
            { recipe.tags !== null ? recipe.tags.map((item, i) => (
              <p
                key={ i }
                data-testid={ `${index}-${item}-horizontal-tag` }
              >
                { item }
              </p>
            )) : '' }
          </div>
        )) }
      </div>
    );
  }
  return (
    <h1>Sou receitas feitas</h1>
  );
}
