import React from 'react';
import { arrayOf, string } from 'prop-types';
import '../../styles/components/IngListWithCheckbox.css';

const IngredientsListWithCheckbox = ({
  id,
  ingredients,
  recipeType,
}) => {
  // const [state, setState] = useState('');
  const handleChange = ({ target }) => {
    const { checked } = target;
    let index = target.getAttribute('index');
    index = parseInt(index, 10);
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes[recipeType][id].length > 0) {
      if (inProgressRecipes[recipeType][id].includes(index)) {
        if (checked === false) {
          const currentIndex = inProgressRecipes[recipeType][id].findIndex((element) => (
            element === index));
          inProgressRecipes[recipeType][id].splice(currentIndex, 1);
        } else if (checked) {
          inProgressRecipes[recipeType][id].push(index);
        }
      } else if (checked) {
        inProgressRecipes[recipeType][id].push(index);
      }
    } else if (checked) {
      inProgressRecipes[recipeType][id].push(index);
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  };

  let localStorageClone = [];
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  localStorageClone = inProgressRecipes[recipeType][id];

  if (localStorageClone === undefined) return (<span>Carregando ingredientes</span>);

  return (
    <section>
      <h3>Ingredientes</h3>
      <ul>
        { ingredients.map((ingredient, index) => (
          <li key={ ingredient } data-testid={ `${index}-ingredient-step` }>
            <label htmlFor={ ingredient }>
              <input
                defaultChecked={ localStorageClone.includes(index) }
                id={ ingredient }
                index={ index }
                onChange={ handleChange }
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
