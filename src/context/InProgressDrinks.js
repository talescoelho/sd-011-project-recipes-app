import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const InProgressContext = createContext();

export function InProgressProvider({ children }) {
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [measurementsArray, setMeasurementsArray] = useState([]);
  const [ingsChecked, setIngsChecked] = useState([]);
  const [enableFinishBtn, setEnableFinishBtn] = useState(false);
  const drinks = JSON.parse(localStorage.getItem('cocktails'));
  const recipeId = window.location.pathname.split('/')[2];

  // const setFinishButton = () => {
  //   const cocktails = JSON.parse(localStorage.getItem('cocktails'));
  //   console.log('cocktails', cocktails[recipeId]);
  //   console.log('ingsChecked', ingsChecked);

  //   if (cocktails[recipeId] && ingsChecked) {
  //     setEnableFinishBtn(ingredientsArray.length === cocktails[recipeId].length
  //       || ingredientsArray.length === ingsChecked[recipeId].length);
  //   }
  // };

  const updateLocalStorage = ({ target }) => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const { meals, cocktails } = inProgressRecipes;
    let itemToSave;
    if (target.checked) {
      itemToSave = {
        meals,
        cocktails: {
          ...cocktails,
          [recipeId]: [...cocktails[recipeId], target.value],
        },
      };
    } else {
      const ingArray = cocktails[recipeId].filter((item) => item !== target.value);
      itemToSave = {
        meals,
        cocktails: {
          ...cocktails,
          [recipeId]: ingArray,
        },
      };
    }
    setIngsChecked(itemToSave);
    localStorage.setItem('inProgressRecipes', JSON.stringify(itemToSave));
  };

  const checkSavedItens = (item) => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const { cocktails } = inProgressRecipes;
    if (cocktails[recipeId].length > 0) {
      return cocktails[recipeId].some((ing) => ing === item);
    }
    return false;
  };

  const value = {
    ingredientsArray,
    setIngredientsArray,
    measurementsArray,
    setMeasurementsArray,
    recipeId,
    drinks,
    // setFinishButton,
    enableFinishBtn,
    updateLocalStorage,
    checkSavedItens,
    // ingsChecked,
  };

  return (
    <InProgressContext.Provider value={ value }>
      { children }
    </InProgressContext.Provider>
  );
}

InProgressProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
