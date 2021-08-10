import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import handleLocation from '../helpers/handleLocation';
import handleToggleDoneIngredient from '../helpers/handleToggleDoneIngredient';

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
    } else {
      const ingredientsInProgressArr = JSON.parse(localStorage.doneIngredients);
      console.log(ingredientsInProgressArr);
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

  const key = handleObjectKey();

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
              onClick={ (event) => handleToggleDoneIngredient(
                event, id, handleObjectKey,
              ) }
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
