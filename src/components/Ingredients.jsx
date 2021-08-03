import React from 'react';
import PropTypes from 'prop-types';

function Ingredients(props) {
  const { ingredients, ingredientsQuantity } = props;
  if (!ingredients || !ingredientsQuantity) return null;
  const ingredientsArr = ingredients.filter((ingredient) => ingredient[1] !== '');
  const ingredientsQuantityArr = ingredientsQuantity
    .filter((ingredient) => ingredient[1] !== '');
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        { ingredientsArr.map((ingredient, index) => (
          <li
            key={ ingredient }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${ingredientsArr[index][1]} - ${ingredientsQuantityArr[index][1]}`}
          </li>))}

      </ul>

    </div>
  );
}

export default Ingredients;

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(String),
  ingredientsQuantity: PropTypes.arrayOf(String),
}.isRequired;
