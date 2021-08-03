import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function IngredientsCheckList({ list }) {

  useEffect(() => {
    
  }, []);
  return (
    <div>
      {list
        .map((ingredient, index) => (
          <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {`${ingredient.name} ${ingredient.measure ? ingredient.measure : ''}`}
          </p>
        ))}
      {/* <input type="checkbox" name={ingredient.name}/> */}
    </div>
  );
}

IngredientsCheckList.propTypes = {
  list: PropTypes.array,
}.isRequired;
