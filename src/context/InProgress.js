import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const InProgressContext = createContext();

export function InProgressProvider({ children }) {
  const [ingr, setIngr] = useState();
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [measurementsArray, setMeasurementsArray] = useState([]);
  const [enableFinishBtn, setEnableFinishBtn] = useState(false);
  const drinks = JSON.parse(localStorage.getItem('cocktails'));
  const recipeId = window.location.pathname.split('/')[2];

  const setFinishButton = () => {
    const cocktails = JSON.parse(localStorage.getItem('cocktails'));
    if (cocktails) {
      setEnableFinishBtn(ingredientsArray.length === cocktails[recipeId].length);
    }
  };

  const setLocalStorage = () => {
    if (!drinks) {
      return { [recipeId]: '' };
    }
    if (drinks && !drinks[recipeId]) {
      return { ...drinks, [recipeId]: [] };
    }
    return { ...drinks };
  };

  const checkSavedItens = (item) => {
    if (drinks[recipeId].length > 0) {
      return drinks[recipeId].some((ing) => ing === item)
      || (ingr && ingr[recipeId].some((ing) => ing === item));
    }
    return false;
  };

  const saveInLocalStorage = ({ target }) => {
    const cocktails = JSON.parse(localStorage.getItem('cocktails'));
    let itemToSave;
    if (target.checked) {
      itemToSave = {
        ...cocktails,
        [recipeId]: [
          ...cocktails[recipeId],
          target.value,
        ],
      };
    } else {
      const ingArray = cocktails[recipeId].filter((item) => item !== target.value);
      itemToSave = {
        ...cocktails,
        [recipeId]: ingArray,
      };
    }
    setIngr(itemToSave);
    localStorage.setItem('cocktails', JSON.stringify(itemToSave));
  };

  const value = {
    ingredientsArray,
    setIngredientsArray,
    measurementsArray,
    setMeasurementsArray,
    ingr,
    setIngr,
    recipeId,
    drinks,
    checkSavedItens,
    saveInLocalStorage,
    setLocalStorage,
    setFinishButton,
    enableFinishBtn,
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
