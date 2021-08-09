import React from 'react';
import PropTypes from 'prop-types';

function IngredientsList({ meal }) {
  function ingredientListMaker() {
    const ingredients = [];
    const measure = [];
    Object.keys(meal).forEach((key, index) => {
      if (meal[`strIngredient${index}`]) ingredients.push(meal[`strIngredient${index}`]);
      if (meal[`strMeasure${index}`]) measure.push(meal[`strMeasure${index}`]);
    });
    return ingredients.map((ingredient, index) => `${ingredient} - ${measure[index]}`);
  }

  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {/* {ingredientListMaker().map((ingredient, index) => (
          <li data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
            {ingredient}
          </li>
        ))} */}
        {ingredientListMaker().map((ingredient, index) => (
          <li data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
            <label htmlFor={ index }>
              <input id={ index } type="checkbox" />
              {ingredient}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;

IngredientsList.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
};
