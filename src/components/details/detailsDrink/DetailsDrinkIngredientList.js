import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../../../context/RecipesContext';

function DetailsDrinkIngredientList() {
  const { drinkId } = useContext(RecipesContext);

  function conditionFor(idx) { // função para não deixar ser iteravel no for quando igrediente fo nulo
    return (drinkId[`strIngredient${idx}`]) !== null
    && (drinkId[`strIngredient${idx}`] !== '');
  }

  function gettingIngredients() {
    const list = [];
    for (let index = 1; conditionFor(index); index += 1) { // depois tentar fazer com filter, mas tem que tranformar as chaves e valores em objetos
      list.push(`${drinkId[`strIngredient${index}`]} - ${drinkId[`strMeasure${index}`]}`); // cria um nova array com ingrediente e quantidade respectivamente
    }
    return list;
  }

  const ingredients = gettingIngredients();
  const checkPath = useLocation();
  const isInProgress = checkPath.pathname.includes('in-progress');

  return (
    <div>
      <h4>Ingredientes</h4>
      <div>
        {!isInProgress
          ? (
            <ol>
              {
                ingredients.map((ingredient, index) => (
                  <li
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    { ingredient }
                  </li>
                ))
              }
            </ol>)
          : (
            <div>
              {
                ingredients.map((ingredient, index) => (
                  <div key={ index }>
                    <input
                      data-testid={ `${index}-ingredient-step` }
                      type="checkbox"
                      name={ `ingredient-${index}` }
                    />
                    <label
                      htmlFor={ `ingredient-${index}` }
                    >
                      {ingredient}
                    </label>
                  </div>
                ))
              }
            </div>
          ) }
      </div>
    </div>
  );
}

export default DetailsDrinkIngredientList;
