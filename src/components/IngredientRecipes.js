import React, { useEffect, useState } from 'react';
import './styleRecipes.css';

const IngredientRecipes = ({ ingredient, typeDrinkorMeal, idItem/* , setEnable */ }) => {
  const typeDoM = typeDrinkorMeal === 'comidas' ? 'meals' : 'cocktails';
  const [update, forceUpdate] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!getStorage) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        [typeDoM]: {
          [idItem]: [],
        },
      }));
      setInfo(getStorage);
    } else {
      setInfo(getStorage);
    }
  }, [idItem, typeDoM, update]);

  const addCheck = (value) => (
    info && info[typeDoM][idItem].length > 0
      ? localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...info,
        [typeDoM]: {
          [idItem]: [...info[typeDoM][idItem], value],
        },
      })) : localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...info,
        [typeDoM]: {
          [idItem]: [value],
        },
      }))
  );

  function removeCheck(value) {
    info[typeDoM][idItem].forEach((itemCheck) => (
      itemCheck === value
      && localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...info,
        [typeDoM]: {
          [idItem]: [...info[typeDoM][idItem].filter((item) => item !== value)],
        },
      }))
    ));
  }

  function recipiesPorgress(target, value) {
    // if (info[typeDoM][idItem].length === ingredient.length) setEnable(true);
    // else setEnable(false);
    forceUpdate(!update);
    if (target.checked) addCheck(value);
    else removeCheck(value);
  }

  const stateCheckd = (value) => {
    const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (getStorage !== null) {
      return getStorage[typeDoM][idItem].includes(value);
    }
  };

  return (
    ingredient.map((item, index) => (
      <label
        key={ index }
        htmlFor={ index }
        data-testid={ `${index}-ingredient-step` }
        className="ingredient"
      >
        <input
          type="checkbox"
          id={ index }
          checked={ stateCheckd(index) }
          onClick={ ({ target }) => recipiesPorgress(target, index) }
        />
        { item }
      </label>
    ))
  );
};

export default IngredientRecipes;
