import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function IngredientList() {
  const { ingredientsListRecipe: ingredients } = useContext(RecipesContext);
  const location = useLocation();

  const renderListInProgress = () => (
    <div>
      <h2 className="text-center">Ingredients</h2>
      <ul className="ingredient-list">
        {ingredients.map((item, index) => (
          <div key={ index }>
            <li>
              <label
                htmlFor={ item }
                data-testid={ `${index}-ingredient-step` }
              >
                <input
                  type="checkbox"
                  name={ item }
                  id={ item }
                />
                {item}
              </label>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );

  const renderListToDetails = () => (
    <div>
      <h2 className="text-center">Ingredients</h2>
      <ul className="ingredient-list">
        {ingredients.map((item, index) => (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  if (!location.pathname.includes('in-progress')) return renderListToDetails();
  if (location.pathname.includes('in-progress')) return renderListInProgress();
}

export default IngredientList;
