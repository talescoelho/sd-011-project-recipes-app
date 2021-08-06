import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import searchCase from '../service/apiSearchBar';
import { requestNewFilterCategories } from '../actions/mainPageRecipe';

function IngredientCard({ name, index, comidasOuBebidas }) {
  const typeMoD = comidasOuBebidas === 'comidas'
    ? `https://www.themealdb.com/images/ingredients/${name}-Small.png`
    : `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`;

  const dispatch = useDispatch(name);

  async function filterIngredient(nameFilter) {
    const typeSearch = comidasOuBebidas === 'comidas'
      ? 'meal' : 'drink';
    dispatch(requestNewFilterCategories(true));
    dispatch(await searchCase(typeSearch, 'ingrediente', nameFilter));
  }

  return (
    <Link
      to={ `/${comidasOuBebidas}` }
      data-testid={ `${index}-ingredient-card` }
      onClick={ () => filterIngredient(name) }
    >
      <img
        src={ typeMoD }
        alt={ name }
        data-testid={ `${index}-card-img` }
        width="30px"
      />
      <p data-testid={ `${index}-card-name` }>{ name }</p>
    </Link>
  );
}

export default IngredientCard;

IngredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  comidasOuBebidas: PropTypes.string.isRequired,
};
