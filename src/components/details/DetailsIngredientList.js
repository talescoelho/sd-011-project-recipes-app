import React, { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RecipesContext from '../../context/RecipesContext';

function DetailsIngredientList() {
  const { mealId,
    setAllIngredientsChecked,
    checkedIngredients,
    setCheckedIngredients,
    checkedNumberIngredients,
    setCheckedNumberIngredients } = useContext(RecipesContext);

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

  useEffect(() => {
    // const checkIndex = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
    // console.log(checkIndex);
    // // const test = checkIndex.meals[urlID];
    // // setCheckedNumberIngredients(test);
    const meals = { meals: { [urlID]: checkedNumberIngredients } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(meals));
  }, [checkedNumberIngredients, urlID, setCheckedNumberIngredients]);

  function addToCheckedIngredient({ target }) {
    if (checkedIngredients.includes(target.value)) {
      const arrayCheckedIngredients = checkedIngredients.filter((ingredient) => (
        ingredient !== target.value));
      setCheckedIngredients(arrayCheckedIngredients);
      const indexIngredient = checkedNumberIngredients.filter((ingredientIndex) => (
        ingredientIndex !== target.name));
      setCheckedNumberIngredients(indexIngredient);
    } else {
      setCheckedIngredients([...checkedIngredients, target.value]);
      setCheckedNumberIngredients([...checkedNumberIngredients, target.name]);
    }
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
                  <>
                    <label
                      htmlFor={ `ingredient-${index}` }
                      data-testid={ `${index}-ingredient-step` }
                      key={ index }
                    >
                      <input
                        type="checkbox"
                        id={ `ingredient-${index}` }
                        name={ index }
                        value={ ingredient }
                        onChange={ addToCheckedIngredient }
                      />
                      { (checkedIngredients.includes(ingredient))
                        ? <del>{ ingredient }</del> : ingredient }
                    </label>
                    <br />
                  </>
                ))
              }
            </div>
          )}
      </div>
    </div>
  );
}

export default DetailsIngredientList;
