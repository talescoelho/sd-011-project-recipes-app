import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function MapIngredients(props) {
  const { dataToManipulate } = props;
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  function listIngredientsFromMeal() {
    const ingredients = [];
    const ingredientQuantity = Object.keys(dataToManipulate)
      .filter((key) => key.includes('strIngredient'));
    const ingredientMeasure = Object.keys(dataToManipulate)
      .filter((key) => key.includes('strMeasure'));
    ingredientQuantity.forEach((ingredient, index) => {
      if (dataToManipulate[ingredient] !== null && dataToManipulate[ingredient] !== '') {
        ingredients.push({
          name: dataToManipulate[ingredient],
          quantity: dataToManipulate[ingredientMeasure[index]],
        });
      }
    });
    setRecipeIngredients(ingredients);
  }

  useEffect(() => {
    listIngredientsFromMeal();
  }, [dataToManipulate]);

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
  dataToManipulate: PropTypes.objectOf(PropTypes.string).isRequired,
};
