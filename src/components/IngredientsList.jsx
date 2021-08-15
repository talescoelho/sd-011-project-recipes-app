import React from 'react';
import PropTypes from 'prop-types';

function IngredientsList({ recipe }) {
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
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredientListMaker().map((ingredient, index) => (
          <li data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
            {ingredient}
          </li>
        ))}
        {/* {ingredientListMaker().map((ingredient, index) => (
          <li data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
            <label htmlFor={ index }>
              <input id={ index } type="checkbox" />
              {ingredient}
            </label>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default IngredientsList;

IngredientsList.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
};
