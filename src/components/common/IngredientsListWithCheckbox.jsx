import React from 'react';
import { arrayOf, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { clearProgress, setProgressDone } from
  '../../redux/actions/recipeProgressActions';
import '../../styles/components/IngredientsListWithCheckbox.css';
import handleChange from '../../helpers/handleChange';

const IngredientsListWithCheckbox = (props) => {
  const {
    addProgressDone,
    id,
    ingredients,
    recipeType,
  } = props;
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const localStorageClone = inProgressRecipes[recipeType][id];
  if (localStorageClone === undefined || localStorageClone === []) {
    return (<span>Carregando ingredients...</span>);
  }
  if (localStorageClone.length === ingredients.length) {
    addProgressDone();
  }
  return (
    <section>
      <h3>Ingredientes</h3>
      <ul>
        { ingredients.map((ingredient, index) => (
          <li key={ ingredient } data-testid={ `${index}-ingredient-step` }>
            <input
              data-testid="ingredient-step"
              defaultChecked={ localStorageClone.includes(index) }
              id={ ingredient }
              index={ index }
              onChange={ (event) => handleChange(event, props) }
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
