import React from 'react';

const IngredientRecipes = ({ ingredient, typeDrinkorMeal, idItem }) => {
  const typeDoM = typeDrinkorMeal === 'comidas' ? 'meals' : 'cocktails';

  // function addCheck(value) {
  //   const info = JSON.parse(localStorage.getItem('inProgressRecipes'));
  //   localStorage.setItem('inProgressRecipes', JSON.stringify({
  //     ...info,
  //     [typeDoM]: {
  //       [idItem]: [...info[typeDoM][idItem], value],
  //     },
  //   }));
  // }

  // function removeCheck(value) {
  //   const info = JSON.parse(localStorage.getItem('inProgressRecipes'));
  //   info[typeDoM][idItem].forEach((itemCheck) => {
  //     if (itemCheck === value) {
  //       localStorage.setItem('inProgressRecipes', JSON.stringify({
  //         ...info,
  //         [typeDoM]: {
  //           [idItem]: [...info[typeDoM][idItem].filter((item) => item !== value)],
  //         },
  //       }));
  //     }
  //   });
  // }

  // function recipiesPorgress(target, value) {
  //   if (target.checked) addCheck(value);
  //   else removeCheck(value);
  // }

  function stateCheckd(value) {
    const info = JSON.parse(localStorage.getItem('inProgressRecipes'));
    return info[typeDoM][idItem].includes(value);
  }

  return (
    ingredient.map((item, index) => (
      <label
        key={ index }
        htmlFor={ index }
        data-testid={ `${index}-ingredient-step` }
      >
        <input
          type="checkbox"
          id={ index }
          checked={ () => stateCheckd(index) }
        // onClick={ ({ target }) => recipiesPorgress({ target }, index) }
        />
        { item }
      </label>
    ))
  );
};

export default IngredientRecipes;
