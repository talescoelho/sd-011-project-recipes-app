import PropTypes from 'prop-types';
import React from 'react';

export default function Ingredients({ recipe }) {
  const ingredientsKeys = Object.keys(recipe).reduce((acc, cur) => {
    if (cur.includes('strIngredient')) {
      return [...acc, cur];
    }
    return acc;
  }, []);
  const measureKeys = Object.keys(recipe).reduce((acc, cur) => {
    if (cur.includes('strMeasure')) {
      return [...acc, cur];
    }
    return acc;
  }, []);

  const ingredients = measureKeys.reduce((acc, cur, index) => {
    if (recipe[cur]) {
      const obj = { name: recipe[ingredientsKeys[index]], measure: recipe[cur] };
      return [...acc, obj];
    }
    return acc;
  }, []);

  return (
    <ol>
      {
        ingredients.map(({ name, measure }, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${name} - ${measure}` }
          </li>))
      }
    </ol>
  );
}

Ingredients.propTypes = {
  recipe: PropTypes.isRequired,
};
