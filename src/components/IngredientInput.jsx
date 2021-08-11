import React, { useState, useEffect } from 'react';

import '../styles/IngredientInput.css';
import makeNewIngredientsArray from '../helpers/makeNewIngredientsArray';

function IngredientInput(
  { ingredient, inProgressIngredients, setInProgressIngredients },
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
    // VERIFICA SE CHECKED SETA A CLASS;
    setDoneClass(isChecked);
  }, [isChecked]);

  const handleCheckIngredient = ({ target }) => {
    const doneItem = isChecked ? ingredient : `${ingredient} done`;
    makeNewIngredientsArray(inProgressIngredients, ingredient, doneItem);
    setIsChecked(!isChecked);
  };

  return (
    <li>
      <input
        id="InputCheckbox"
        type="checkbox"
        checked={ isChecked }
        onClick={ (event) => handleCheckIngredient(event) }
      />
      <span className={ scratched }>
        { ingredient }
      </span>
    </li>
  );
}

export default IngredientInput;
