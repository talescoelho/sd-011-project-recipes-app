import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function IngredientDetails({ inProcess }) {
  const { idDetails } = useContext(AppContext);

  function toggle(e) {
    document.getElementById(e.target.value).classList.toggle('liIngredients');
    console.log(e.target.value);
  }

  const ingredients = Object.keys(idDetails[0])
    .filter((el) => el.includes('strIngredient'));
  const measure = Object.keys(idDetails[0]).filter((el) => el.includes('strMeasure'));

  const ingredientList = ingredients
    .filter((el) => idDetails[0][el])
    .map((ing, index) => `${idDetails[0][ing]} - ${idDetails[0][measure[index]]}`);

  return (
    <>
      <h3>Ingredients</h3>
      <ul>
        {ingredientList && ingredientList
          .map((item, index) => (
            <li
              style={ { listStyle: 'none' } }
              key={ index }
              data-testid={ inProcess
                ? `${index}-"ingredient-step"`
                : `${index}-ingredient-name-and-measure` }
            >
              {inProcess
                ? (
                  <label id={ index } htmlFor={ item }>
                    <input
                      id={ item }
                      type="checkbox"
                      value={ index }
                      onClick={ (e) => toggle(e) }
                    />
                    {item}
                  </label>) : item }
            </li>))}
      </ul>
      <h3>Instructions</h3>
      <p data-testid="instructions">{idDetails[0].strInstructions}</p>
      <button data-testid="finish-recipe-btn" type="button">Finalizar</button>
    </>
  );
}

export default IngredientDetails;

IngredientDetails.propTypes = {
  inProcess: PropTypes.bool,
};

IngredientDetails.defaultProps = {
  inProcess: true,
};
