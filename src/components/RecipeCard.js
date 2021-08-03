import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { RecipesContext } from '../context/RecipesContext';

export default function RecipeCard(props) {
  const { setInProgress } = useContext(RecipesContext);
  const { recipe, index, type } = props;
  let tipo = 'comidas';
  if (type === 'Drink') { tipo = 'bebidas'; }

  const [isRedirect, setIsRedirect] = useState(false);
  const handleValue = (key, event) => {
    setInProgress({[key]: event});
    // localStorage.setItem('id', event);
    setIsRedirect(true);
  }

  return (
    // como deixar card inteiro com tipo 'button'?
    <div>
      <span data-testid={ `${index}-recipe-card` }>
        <img
          data-testid={ `${index}-card-img` }
          alt={ `Foto da receita ${recipe[`str${type}`]}` }
          src={ recipe[`str${type}Thumb`] }
          width="50px"
        />
        <h6 data-testid={ `${index}-card-name` }>
          {recipe[`str${type}`]}
        </h6>
      </span>
      <button type="button" onClick={ () => handleValue(type, recipe[`id${type}`]) }>Detalhes</button>
      { isRedirect && <Redirect to={ `/${tipo}/${recipe[`id${type}`]}` } /> }
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.array,
  index: PropTypes.number,
  type: PropTypes.string,
}.isRequired;
