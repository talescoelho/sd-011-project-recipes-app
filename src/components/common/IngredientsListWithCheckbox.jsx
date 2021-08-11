import React from 'react';
import { arrayOf, string } from 'prop-types';
import '../../styles/components/IngListWithCheckbox.css';

const handleChange = ({ target }) => {
  const { checked } = target;
  // const id = target.getAttribute('id');
  let index = target.getAttribute('index');
  index = parseInt(index, 10);
  const recipeType = target.getAttribute('recipetype');
  const recipeId = target.getAttribute('recipeId');
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgressRecipes[recipeType][recipeId].length > 0) {
    if (inProgressRecipes[recipeType][recipeId].includes(index)) {
      // eslint-disable-next-line no-empty
      if (checked) {

      } else {
        // eslint-disable-next-line max-len
        const currentIndex = inProgressRecipes[recipeType][recipeId].findIndex((element) => element === index);
        inProgressRecipes[recipeType][recipeId].splice(currentIndex, 1);
      }
    } else if (checked) {
      inProgressRecipes[recipeType][recipeId].push(index);
    }
  } else if (checked) {
    inProgressRecipes[recipeType][recipeId].push(index);
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
};

const IngredientsListWithCheckbox = ({
  id,
  ingredients,
  recipeType,
}) => {
  let localStorageClone = [];
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  localStorageClone = inProgressRecipes[recipeType][id];
  return (
    <section>
      <h3>Ingredientes</h3>
      <ul>
        { ingredients.map((ingredient, index) => (
          <li key={ ingredient.name } data-testid={ `${index}-ingredient-step` }>
            <label htmlFor={ ingredient }>
              <input
                defaultChecked={ localStorageClone.includes(index) }
                recipeId={ id }
                id={ ingredient }
                index={ index }
                key={ index }
                onChange={ handleChange }
                recipeType={ recipeType }
                type="checkbox"
              />
              { ingredient }
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

IngredientsListWithCheckbox.propTypes = ({
  id: string,
  ingredients: arrayOf(string),
  recipeType: string,
}).isRequired;

export default IngredientsListWithCheckbox;
