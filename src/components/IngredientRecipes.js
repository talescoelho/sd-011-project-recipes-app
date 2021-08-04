import React, { useEffect, useState } from 'react';
import './styleRecipes.css';

const IngredientRecipes = ({ ingredient, typeDrinkorMeal, idItem }) => {
  const typeDoM = typeDrinkorMeal === 'comidas' ? 'meals' : 'cocktails';

  const [update, forceUpdate] = useState(false);
  const [state, setState] = useState({});

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (info === null) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...info,
        [typeDoM]: {
          [idItem]: [],
        },
      }));
    } else setState(info);
    setState(info);
  }, [idItem, typeDoM, update]);

  function addCheck(value) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...state,
      [typeDoM]: {
        [idItem]: [...state[typeDoM][idItem], value],
      },
    }));
  }

  function removeCheck(value) {
    state[typeDoM][idItem].forEach((itemCheck) => {
      if (itemCheck === value) {
        localStorage.setItem('inProgressRecipes', JSON.stringify({
          ...state,
          [typeDoM]: {
            [idItem]: [...state[typeDoM][idItem].filter((item) => item !== value)],
          },
        }));
      }
    });
  }

  function recipiesPorgress({ target }) {
    const { id, checked } = target;
    forceUpdate(!update);
    if (checked) addCheck(Number(id));
    else removeCheck(Number(id));
  }

  function stateCheckd(value) {
    return state[typeDoM][idItem].includes(value);
  }

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
          onClick={ recipiesPorgress }
        />
        { item }
      </label>
    ))
  );
};

export default IngredientRecipes;
