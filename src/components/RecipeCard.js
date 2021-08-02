import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeCard(props) {
  const { recipe, index, type } = props;
  let tipo = 'comidas';
  if (type === 'Drink') { tipo = 'bebidas'; }

  return (
    // como deixar card inteiro com tipo 'button'?
    <Link to={ `/${tipo}/${recipe[`id${type}`]}` }>
      <span data-testid={ `${index}-recipe-card` }>
        <img
          data-testid={ `${index}-card-img` }
          alt={ `Foto da receita ${recipe[`str${type}`]}` }
          src={ recipe[`str${type}Thumb`] }
          width="50px"
        />
        <h6 data-testid={ `${index}-card-name` }>{recipe[`str${type}`]}</h6>
      </span>
    </Link>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.array,
  index: PropTypes.number,
  type: PropTypes.string,
}.isRequired;
