import React from 'react';
import { arrayOf, string } from 'prop-types';
import '../../styles/components/IngListWithCheckbox.css';

const handleChange = ({ target }) => {
  const { id, checked, index, recipeType } = target;
  const inProgressRecipes = localStorage.getItem('inProgressRecipes');
  if (checked) {
    inProgressRecipes.$[recipeType].$[id].push(index);
  } else {
    const pos = inProgressRecipes.$[recipeType].$[id].indexOf(index);
    inProgressRecipes.$[recipeType].$[id].splice(pos, 1);
  }

  localStorage.setItem('inProgressRecipes', JSON.stringify({
    inProgressRecipes,
  }));
};

const IngListWithCheckbox = ({ id, ingredients, recipeType }) => (
  <ul>
    { ingredients.map((ingredient, index) => (
      <li key={ ingredient }>
        <label htmlFor={ id }>
          <input
            type="checkbox"
            recipeType={ recipeType }
            id={ id }
            index={ index }
            data-testid={ `${index}-ingredient-step` }
            onChange={ handleChange }
            className="strikethrough"
          />
          { ingredient }
        </label>
      </li>))}
  </ul>
);

IngListWithCheckbox.propTypes = ({
  id: string,
  ingredients: arrayOf(string),
  recipeType: string,
}).isRequired;

export default IngListWithCheckbox;
