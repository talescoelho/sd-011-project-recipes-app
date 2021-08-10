import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import handleLocation from './handleLocation';

import '../styles/ingredientsFormatter.css';

export default function IngredientsFormatter({ recipe }) {
  const { id } = recipe;
  const location = useLocation();
  useEffect(() => {
    if (!localStorage.getItem('doneIngredients')) {
      localStorage.setItem('doneIngredients', JSON.stringify({
        cocktails: {},
        meals: {},
      }));
    }
  }, []);

  const { ingredients, ingredientsQuantity } = recipe;
  if (!ingredients || !ingredientsQuantity) return null;
  const ingredientsArr = ingredients
    .filter((ingredient) => ingredient[1] !== '' && ingredient[1] !== null);
  const ingredientsQuantityArr = ingredientsQuantity
    .filter((ingredient) => ingredient[1] !== '' && ingredient[1] !== null);

  const handleObjectKey = () => {
    const type = handleLocation(location);
    let key = '';
    if (type === 'comidas') key = 'meals';
    if (type === 'bebidas') key = 'cocktails';
    return key;
  };


  const handleToggleDoneIngredient = ({ target }) => {
    const ingredient = target.parentNode;
    ingredient.classList.toggle('doneIngredient');
    const ingredientName = ingredient.getAttribute('id');
    const key = handleObjectKey();
    const usedIngredients = JSON.parse(localStorage.getItem('doneIngredients'));

    if (usedIngredients[key][id] && usedIngredients[key][id].includes(ingredientName)) {
      const index = usedIngredients[key][id].indexOf(ingredientName);
      // const array = usedIngredients[key][id].slice(index, 1);
      localStorage.setItem('doneIngredients', JSON.stringify(
        { ...usedIngredients,
          [key]: { ...usedIngredients[key],
            [id]: [
              ...usedIngredients[key][id].slice(0, index),
              ...usedIngredients[key][id].slice(index + 1)],
          },
        },
      ));
    } else if (usedIngredients[key][id]) {
      localStorage.setItem('doneIngredients', JSON.stringify(
        { ...usedIngredients,
          [key]: { ...usedIngredients[key],
            [id]: [...usedIngredients[key][id], ingredientName] },
        },
      ));
    } else {
      localStorage.setItem('doneIngredients', JSON.stringify(
        { ...usedIngredients,
          [key]: { ...usedIngredients[key],
            [id]: [ingredientName] },
        },
      ));
    }
  };
  return (
    <div>
      <h3>Ingredients</h3>
      <div>
        { ingredientsArr.map((ingredient, index) => (
          <li
            id={ ingredient[1] }
            key={ ingredient }
            data-testid={ `${index}-ingredient-step` }
          >
            <input
              type="checkbox"
              onClick={ (event) => handleToggleDoneIngredient(event) }
            />
            {`${ingredientsArr[index][1]}  
              ${ingredientsQuantityArr[index]
            ? `- ${ingredientsQuantityArr[index][1]}` : ''}`}
          </li>))}
      </div>
    </div>
  );
}

IngredientsFormatter.propTypes = {
  ingredients: PropTypes.arrayOf(String),
  ingredientsQuantity: PropTypes.arrayOf(String),
}.isRequired;
