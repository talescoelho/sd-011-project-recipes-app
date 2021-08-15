import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import DetailsContext from '../context/detailsContext';
import { getIds } from '../services';

const onChecked = {
  textDecoration: 'line-through',
  fontSize: '25px',
};

const offChecked = {
  textDecoration: 'none',
  fontSize: '25px',
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
  }, [recipe, id, setIngredients, similarName]);

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
    <div className="bg-light pt-2 m-3 rounded border">
      <ol className="d-flex flex-column">
        {
          (ingredients) && ingredients.map(({ name, measure, checked }, index) => (
            (inProgress) ? (
              <div className="d-flex align-items-center">
                <label
                  key={ index }
                  htmlFor={ name }
                  data-testid={ `${index}-ingredient-step` }
                  style={ (checked) ? onChecked : offChecked }
                >
                  <input
                    style={ { height: '20px', width: '20px' } }
                    onClick={ () => checkedIngredient(name) }
                    type="checkbox"
                    checked={ checked }
                    id={ name }
                  />
                  { `  ${name} - ${measure}` }
                </label>
              </div>
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
    </div>
  );
}

Ingredients.propTypes = {
  inProgress: PropTypes.string,
  recipe: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
};

Ingredients.defaultProps = {
  inProgress: undefined,
};

// data-testid*="ingredient-step";
