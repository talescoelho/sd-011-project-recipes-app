import React, { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RecipesContext from '../../../context/RecipesContext';

function DetailsDrinkIngredientList() {
  const { drinkId,
    setAllIngredientsChecked,
    checkedIngredients,
    setCheckedIngredients,
    checkedNumberIngredients,
    setCheckedNumberIngredients } = useContext(RecipesContext);

  function conditionFor(idx) { // função para não deixar ser iteravel no for quando ingrediente for nulo
    return !!drinkId[`strIngredient${idx}`];
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
  const params = useParams();
  const urlID = params.id;

  useEffect(() => ((ingredients.length === checkedIngredients.length)
    ? setAllIngredientsChecked(false)
    : setAllIngredientsChecked(true)),
  [checkedIngredients, ingredients.length, setAllIngredientsChecked]);

  useEffect(() => {
    const localIngredient = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!localIngredient.cocktails) {
      const drinks1 = { ...localIngredient, cocktails: {} };
      localStorage.setItem('inProgressRecipes', JSON.stringify(drinks1))
    } else if (localIngredient.cocktails[urlID] && localIngredient.cocktails[urlID].length !== 0) {
      const test = localIngredient.cocktails[urlID];
      const filterIngredientLocalStorage = (
        ingredients.filter((_, index) => test.includes(index)));
      setCheckedNumberIngredients(test);
      setCheckedIngredients(filterIngredientLocalStorage);
    } else if (isInProgress) {
      const drinks1 = { ...localIngredient, cocktails: { ...localIngredient.cocktails, [urlID]: [] } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(drinks1));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addToCheckedIngredient(ingredient, index) {
    const test = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (checkedIngredients.includes(ingredient)) {
      const arrayCheckedIngredients = checkedIngredients.filter((ingredient1) => (
        ingredient1 !== ingredient));
      setCheckedIngredients(arrayCheckedIngredients);
      const indexIngredient = checkedNumberIngredients.filter((ingredientIndex) => (
        ingredientIndex !== Number(index)));
      setCheckedNumberIngredients(indexIngredient);
      test.cocktails[urlID] = indexIngredient;
      localStorage.setItem('inProgressRecipes', JSON.stringify(test));
    } else {
      setCheckedIngredients([...checkedIngredients, ingredient]);
      const number = [...checkedNumberIngredients, Number(index)];
      setCheckedNumberIngredients(number);
      test.cocktails[urlID] = number;
      localStorage.setItem('inProgressRecipes', JSON.stringify(test));
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
                        checked={ checkedIngredients.includes(ingredient) }
                      />
                      { (checkedIngredients.includes(ingredient))
                        ? <del>{ ingredient }</del> : ingredient }
                    </label>
                    <br />
                  </>
                ))
              }
            </div>
          ) }
      </div>
    </div>
  );
}

export default DetailsDrinkIngredientList;
