import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function DrinkCard(props) {
  const { resultDrink } = props;
  const totalRecipes = 12;
  const drinks = resultDrink.filter((_, index) => index < totalRecipes);

  return (
    <div>
      {drinks.map((recipe, index) => (
        <div key={ recipe.idMeal } className="card">
          <Link to={ `/bebidas/${recipe.idDrink}` }>
            <div key={ recipe.idDrink } data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ recipe.strDrinkThumb }
                alt={ recipe.strDrink }
                width="60px"
              />
              <h4 data-testid={ `${index}-card-name` }>{ recipe.strDrink }</h4>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => ({
  resultDrink: state.drink.recipes,
});

DrinkCard.propTypes = {
  resultDrink: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(DrinkCard);
