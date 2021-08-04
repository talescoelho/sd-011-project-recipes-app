import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import DetailsContext from '../context/detailsContext';
import { getIds } from '../services';

const onChecked = {
  textDecoration: 'line-through',
};

const offChecked = {
  textDecoration: 'none',
};

export default function Ingredients({ recipe, inProgress, type }) {
  const { ingredients, setIngredients } = useContext(DetailsContext);
  const { id, similarName } = getIds(type, recipe);

  useEffect(() => {
    const storage = JSON.parse(localStorage.inProgressRecipes)[similarName][id];
    if (storage) {
      setIngredients(storage);
    } else {
      const ingredientsKeys = Object.keys(recipe).reduce((acc, cur) => {
        if (cur.includes('strIngredient')) {
          return [...acc, cur];
        }
        return acc;
      }, []);
      const measureKeys = Object.keys(recipe).reduce((acc, cur) => {
        if (cur.includes('strMeasure')) {
          return [...acc, cur];
        }
        return acc;
      }, []);
      const newIngredients = measureKeys.reduce((acc, cur, index) => {
        if (recipe[cur] && recipe[cur].length > 1) {
          const obj = {
            name: recipe[ingredientsKeys[index]], measure: recipe[cur], checked: false,
          };
          return [...acc, obj];
        }
        return acc;
      }, []);
      setIngredients(newIngredients);
    }
  }, [recipe]);

  function setLocalStorage(teste) {
    const initialInProgress = JSON.stringify({ cocktails: {}, meals: {} });
    if (!localStorage.inProgressRecipes) {
      localStorage.setItem('inProgressRecipes', initialInProgress);
    }
    const storage = JSON.parse(localStorage.inProgressRecipes);
    const typeStorage = storage[similarName];
    typeStorage[id] = teste;
    localStorage.setItem('inProgressRecipes', JSON.stringify(storage));
  }

  function checkedIngredient(ingredientName) {
    const newIngredients = ingredients.map(({ name, measure, checked }) => {
      if (name === ingredientName) {
        return { name, measure, checked: !checked };
      }
      return { name, measure, checked };
    });
    setIngredients(newIngredients);
    setLocalStorage(newIngredients);
  }

  return (
    <ol>
      {
        (ingredients) && ingredients.map(({ name, measure, checked }, index) => (
          (inProgress) ? (
            <label
              key={ index }
              htmlFor={ name }
              data-testid={ `${index}-ingredient-step` }
              style={ (checked) ? onChecked : offChecked }
            >
              <input
                onClick={ () => checkedIngredient(name) }
                type="checkbox"
                checked={ checked }
                id={ name }
              />
              { name }
            </label>
          ) : (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${name} - ${measure}` }
            </li>
          )
        ))
      }
    </ol>
  );
}

Ingredients.propTypes = {
  recipe: PropTypes.isRequired,
  inProgress: PropTypes.isRequired,
};

// data-testid*="ingredient-step";
