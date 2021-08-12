import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import '../styles/IngredientInput.css';
import makeNewIngredientsArray from '../helpers/makeNewIngredientsArray';

function IngredientInput(
  { ingredient, inProgressIngredients, setNewRender, newRender, index, type, id },
) {
  const [isChecked, setIsChecked] = useState(false);
  const [doneClass, setDoneClass] = useState(isChecked);
  const scratched = doneClass ? 'doneIngredient' : '';
  const indexOfIngredient = inProgressIngredients.indexOf(ingredient);

  useEffect(() => {
    // VERIFICA SE NO NOME INCLUI DONE; E SETA CHECKED;
    setIsChecked(inProgressIngredients[indexOfIngredient].includes('done'));
  }, []);

  useEffect(() => {
    // VERIFICA SE CHECKED  SETA A CLASS;
    setDoneClass(isChecked);
  }, [isChecked]);

  const handleCheckIngredient = ({ target }) => {
    const doneItem = isChecked ? ingredient.replace(' done', '') : `${ingredient} done`;
    makeNewIngredientsArray(inProgressIngredients, ingredient, doneItem, type, id);
    setIsChecked(!isChecked);
    setNewRender(!newRender);
  };

  return (
    <li
      data-testid={ `${index}-ingredient-step` }
    >
      <input
        id="InputCheckbox"
        type="checkbox"
        checked={ isChecked }
        onClick={ (event) => handleCheckIngredient(event) }
        readOnly
      />
      <span className={ scratched }>
        { ingredient.replace(' done', '') }
      </span>
    </li>
  );
}

IngredientInput.propTypes = {
  id: PropTypes,
  inProgressIngredients: PropTypes.shape({
    indexOf: PropTypes.func,
  }),
  ingredient: PropTypes.shape({
    replace: PropTypes.func,
  }),
  newRender: PropTypes.any,
  setNewRender: PropTypes.func,
  type: PropTypes.any,
}.isRequired;

export default IngredientInput;
