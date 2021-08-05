import React from 'react';
import { arrayOf, string } from 'prop-types';
import '../../styles/components/IngListWithCheckbox.css';

const handleChange = ({ target }) => {
  const { id, checked, index, recipeType } = target;
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
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
            className="strikethrough"
            data-testid={ `${index}-ingredient-step` }
            id={ id }
            index={ index }
            onChange={ handleChange }
            recipeType={ recipeType }
            type="checkbox"
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
