import React from 'react';
import { arrayOf, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { clearProgress, setProgressDone } from
  '../../redux/actions/recipeProgressActions';
import '../../styles/components/IngredientsListWithCheckbox.css';

const IngredientsListWithCheckbox = ({
  addProgressDone,
  id,
  ingredients,
  recipeType,
  resetProgress,
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
          if (inProgressRecipes[recipeType][id].length === ingredients.length) {
            resetProgress();
          }
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
    if (inProgressRecipes[recipeType][id].length === ingredients.length) {
      addProgressDone();
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
            <input
              defaultChecked={ localStorageClone.includes(index) }
              id={ ingredient }
              index={ index }
              onChange={ handleChange }
              type="checkbox"
            />
            <label htmlFor={ ingredient }>
              { ingredient }
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProgressDone: () => dispatch(setProgressDone()),
  resetProgress: () => dispatch(clearProgress()),
});

IngredientsListWithCheckbox.propTypes = ({
  addProgressDone: func,
  id: string,
  ingredients: arrayOf(string),
  recipeType: string,
}).isRequired;

export default connect(null, mapDispatchToProps)(IngredientsListWithCheckbox);
