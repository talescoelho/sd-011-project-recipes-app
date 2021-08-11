import React from 'react';

export default function FilterButtonsRecipesDone() {
  const storage = JSON.parse(localStorage.getItem('doneRecipes'));

  console.log('localStorage', storage);

  storage.map((recipe, index) => {
    if (recipe.idDrink) {
      return (
        <div
          key={ index }
        >
          <img
            data-testid={ `${index}-horizontal-image` }
            src={ recipe.strDrinkThumb }
            alt={ recipe.strDrink }
            width="80"
          />
          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            { recipe.strCategory }
          </p>
          <h3
            data-testid={ `${index}-horizontal-name` }
          >
            { recipe.strDrink }
          </h3>
          <p
            data-testid={ `${index}-horizontal-name` }
          >
            { recipe.dateModified }
          </p>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
          >
            Share
          </button>
          <p
            data-testid={ `${index}-${recipe.strTags}-horizontal-tag` }
          >
            { recipe.strTags }
          </p>
        </div>
      );
    }
    return (
      <div
        key={ index }
      >
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ recipe.strMealThumb }
          alt={ recipe.strMeal }
          width="80"
        />
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          { recipe.strCategory }
        </p>
        <h3
          data-testid={ `${index}-horizontal-name` }
        >
          { recipe.strMeal }
        </h3>
        <p
          data-testid={ `${index}-horizontal-name` }
        >
          { recipe.dateModified }
        </p>
        <button
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
        >
          Share
        </button>
        <p
          data-testid={ `${index}-${recipe.strTags}-horizontal-tag` }
        >
          { recipe.strTags }
        </p>
      </div>
    );
  });
}
