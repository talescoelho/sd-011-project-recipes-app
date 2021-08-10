import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function IngredientDetails() {
  const { idDetails } = useContext(AppContext);

  const ingredients = Object.keys(idDetails[0])
    .filter((el) => el.includes('strIngredient'));
  const measure = Object.keys(idDetails[0]).filter((el) => el.includes('strMeasure'));
  // console.log('ingredients', ingredients);
  // console.log('measure', measure);

  const ingredientList = ingredients
    .filter((el) => idDetails[0][el])
    .map((ing, index) => `${idDetails[0][ing]} - ${idDetails[0][measure[index]]}`);
  // console.log('lista', ingredientList);


  return (
    <>
      <h3>Ingredients</h3>
      <ul>
        {ingredientList.map((item, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {item}
          </li>))}
      </ul>
      <h3>Instructions</h3>
      <p data-testid="instructions">{idDetails[0].strInstructions}</p>
    </>
  );
}

export default IngredientDetails;
