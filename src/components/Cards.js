import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchIngrentAction, fetchDrinksAction } from '../redux/actions';

function loadFetch(state, requestFoodRecipes, requestDrinkRecipes) {
  if (state && window.location.pathname.split('/')[1] === 'comidas') {
    requestFoodRecipes(state, 'ingrediente');
  } else if (state && window.location.pathname.split('/')[1] === 'bebidas') {
    requestDrinkRecipes(state, 'ingrediente');
  }
}

function DrinkCard(props) {
  const { location, resultDrink, resultFood } = props;
  const { state, requestFoodRecipes, requestDrinkRecipes } = props;
  const [strType, setStrType] = useState('');
  const [resultType, setResultType] = useState('');
  const totalRecipes = 12;
  const result = {
    bebidas: resultDrink && resultDrink.filter((_, index) => index < totalRecipes),
    comidas: resultFood && resultFood.filter((_, index) => index < totalRecipes),
  };

  useEffect(() => {
    if (state) {
      loadFetch(state, requestFoodRecipes, requestDrinkRecipes);
    }
  }, [requestDrinkRecipes, requestFoodRecipes, state]);

  useEffect(() => {
    if (location === '/bebidas') {
      setStrType('Drink');
      setResultType('bebidas');
    } else {
      setStrType('Meal');
      setResultType('comidas');
    }
  }, [location, resultType]);

  if (result[resultType] === null) {
    return <p>Comida ou Bebida não encontrada</p>;
  }

  if (!result[resultType]) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      {result[resultType].map((recipe, index) => (
        <Link
          className="card-recipe"
          key={ recipe[`id${strType}`] }
          to={ `/${resultType}/${recipe[`id${strType}`]}` }
        >
          <div data-testid={ `${index}-recipe-card` } className="card-container">
            <div key={ recipe[`id${strType}`] }>
              <img
                data-testid={ `${index}-card-img` }
                src={ recipe[`str${strType}Thumb`] }
                alt={ recipe[`str${strType}`] }
              />
              <h4 data-testid={ `${index}-card-name` }>{ recipe[`str${strType}`] }</h4>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  resultDrink: state.drink.recipes,
  resultFood: state.food.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  requestFoodRecipes: (searchInput, searchFilter) => (
    dispatch(fetchIngrentAction(searchInput, searchFilter))),
  requestDrinkRecipes: (searchInput, searchFilter) => (
    dispatch(fetchDrinksAction(searchInput, searchFilter))
  ),
});

DrinkCard.propTypes = {
  resultDrink: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCard);
