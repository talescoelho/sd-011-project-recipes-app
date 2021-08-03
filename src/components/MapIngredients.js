import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function MapIngredients(props) {
  const { dataTomanipulate } = props;
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  function listIngredientsFromMeal() {
    const ingredients = [];
    const ingredientQuantity = Object.keys(dataTomanipulate)
      .filter((key) => key.includes('strIngredient'));
    const ingredientMeasure = Object.keys(dataTomanipulate)
      .filter((key) => key.includes('strMeasure'));
    ingredientQuantity.forEach((ingredient, index) => {
      if (dataTomanipulate[ingredient] !== null && dataTomanipulate[ingredient] !== '') {
        ingredients.push({
          name: dataTomanipulate[ingredient],
          quantity: dataTomanipulate[ingredientMeasure[index]],
        });
      }
    });
    setRecipeIngredients(ingredients);
  }

  useEffect(() => {
    listIngredientsFromMeal();
  }, [dataTomanipulate]);

  return (
    <div>
      <ul>
        {recipeIngredients.map(({ name, quantity }, ingredientIndex) => (
          <li
            data-testid={ `${ingredientIndex}-ingredient-name-and-measure` }
            key={ ingredientIndex }
          >
            {`- ${name} - ${quantity}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

MapIngredients.propTypes = {
  dataTomanipulate: PropTypes.objectOf.isRequired,
};
