import React, { useEffect, useState } from 'react';
import { arrayOf, string } from 'prop-types';
import '../../styles/components/IngListWithCheckbox.css';

const handleChange = ({ target }) => {
  const { checked } = target;
  // const id = target.getAttribute('id');
  const index = target.getAttribute('index');
  const recipeType = target.getAttribute('recipetype');
  const recipeId = target.getAttribute('recipeId');
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const inProgressRecipe = JSON.parse(localStorage.getItem('inProgressRecipe'));
  if (checked) {
    inProgressRecipes[recipeType][recipeId].push(index);
    inProgressRecipe[index].checked = true;
  } else {
    // eslint-disable-next-line max-len
    const currentIndex = inProgressRecipes[recipeType][recipeId].findIndex((element) => element === index);
    inProgressRecipes[recipeType][recipeId].splice(currentIndex, 1);
    inProgressRecipe[index].checked = false;
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  localStorage.setItem('inProgressRecipe', JSON.stringify(inProgressRecipe));
};

const IngredientsListWithCheckbox = ({
  id,
  ingredients,
  recipeType,
}) => {
  const [storageIngredients, setStorageIngredients] = useState([]);
  useEffect(() => {
    let inProgressRecipe = JSON.parse(localStorage.getItem('inProgressRecipe'));
    if (inProgressRecipe[0].name === '') {
      for (let index = 0; index <= ingredients.length - 1; index += 1) {
        inProgressRecipe[index].name = ingredients[index];
      }
      inProgressRecipe = inProgressRecipe.filter((element) => element.name !== '');
    }
    setStorageIngredients(inProgressRecipe);
    localStorage.setItem('inProgressRecipe', JSON.stringify(inProgressRecipe));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ul>
      { storageIngredients.map((ingredient, index) => (
        <li key={ ingredient.name }>
          <label className="strikeThis" htmlFor={ ingredient.name }>
            <input
              className="strikethrough"
              data-testid={ `${index}-ingredient-step` }
              recipeId={ id }
              id={ ingredient.name }
              index={ index }
              key={ index }
              onChange={ handleChange }
              recipeType={ recipeType }
              type="checkbox"
            />
            { ingredient.name }
          </label>
        </li>
      ))}
    </ul>
  );
};

IngredientsListWithCheckbox.propTypes = ({
  id: string,
  ingredients: arrayOf(string),
  recipeType: string,
}).isRequired;

export default IngredientsListWithCheckbox;
