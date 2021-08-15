import React from 'react';
import PropTypes from 'prop-types';

function IngredientsList({ recipe, inProgress }) {
  function ingredientListMaker() {
    const ingredients = [];
    const measure = [];
    Object.keys(recipe).forEach((key, index) => {
      if (recipe[`strIngredient${index}`]) {
        ingredients.push(recipe[`strIngredient${index}`]);
      }
      if (recipe[`strMeasure${index}`]) measure.push(recipe[`strMeasure${index}`]);
    });
    return ingredients.map((ingredient, index) => `${ingredient} - ${measure[index]}`);
  }

  return (
    <>
      <h2>Ingredients</h2>
      {(inProgress) ? (
        ingredientListMaker().map((ingredient, index) => (
          <li data-testid={ `${index}-ingredient-step` } key={ index }>
            <label htmlFor={ index }>
              <input id={ index } type="checkbox" />
              {ingredient}
            </label>
          </li>
        ))
      ) : (
        <ul>
          {ingredientListMaker().map((ingredient, index) => (
            <li data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
              {ingredient}
            </li>
          ))}
          {}
        </ul>
      )}
    </>
  );
}

export default IngredientsList;

IngredientsList.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  inProgress: PropTypes.bool.isRequired,
};
