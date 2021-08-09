import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RecipesContext from '../../context/RecipesContext';

function DetailsIngredientList() {
  const { mealId, setAllIngredientsChecked } = useContext(RecipesContext);
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [checkedNumberIngredients, setCheckedNumberIngredients] = useState([]);

  function conditionFor(idx) { // função para não deixar ser iteravel no for quando igrediente fo nulo
    return (mealId[`strIngredient${idx}`]) !== null
    && (mealId[`strIngredient${idx}`] !== '');
  }

  function gettingIngredients() {
    const list = [];
    for (let index = 1; conditionFor(index); index += 1) { // depois tentar fazer com filter, mas tem que tranformar as chaves e valores em objetos
      list.push(`${mealId[`strIngredient${index}`]} -- ${mealId[`strMeasure${index}`]}`); // cria um nova array com ingrediente e quantidade respectivamente
    }
    return list;
  }

  const ingredients = gettingIngredients();
  const checkPath = useLocation();
  const isInProgress = checkPath.pathname.includes('in-progress');

  const params = useParams();
  const urlID = params.id;

  useEffect(() => ((ingredients.length === checkedIngredients.length)
    ? setAllIngredientsChecked(false)
    : setAllIngredientsChecked(true)),
  [checkedIngredients, ingredients.length, setAllIngredientsChecked]);

  function localMemory() {
    const meals = { meals: { [urlID]: checkedNumberIngredients } };
    const test = localStorage.setItem('inProgressRecipes', JSON.stringify(meals)) || [];
    return test;
  }

  function addToCheckedIngredient({ target }) {
    if (checkedIngredients.includes(target.value)) {
      const arrayIngredientsChecked = checkedIngredients.filter((ingredient) => (
        ingredient !== target.value));
      const indexIngredient = checkedNumberIngredients.filter((ingredientIndex) => (
        ingredientIndex !== target.getAttribute('name')));
      setCheckedNumberIngredients(indexIngredient);
      setCheckedIngredients(arrayIngredientsChecked);
      return localMemory();
    }
    setCheckedNumberIngredients([...checkedNumberIngredients, target.name]);
    setCheckedIngredients([...checkedIngredients, target.value]);
    return localMemory();
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
                      name={ index }
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
          )}
      </div>
    </div>
  );
}

export default DetailsIngredientList;
