import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../../../context/RecipesContext';

function DetailsDrinkIngredientList() {
  const { drinkId } = useContext(RecipesContext);
  const [checkedIngredients, setCheckedIngredients] = useState([]);

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

  function addToCheckedIngredient({ target }) {
    if (checkedIngredients.includes(target.value)) {
      const arrayIngredientsChecked = checkedIngredients.filter((ingredient) => (
        ingredient !== target.value));
      return setCheckedIngredients(arrayIngredientsChecked);
    }
    return setCheckedIngredients([...checkedIngredients, target.value]);
  }

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
                      id={ `ingredient-${index}` }
                      value={ ingredient }
                      onChange={ addToCheckedIngredient }
                    />
                    <label
                      htmlFor={ `ingredient-${index}` }
                    >
                      { (checkedIngredients.includes(ingredient))
                        ? <del>{ ingredient }</del> : ingredient }
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
