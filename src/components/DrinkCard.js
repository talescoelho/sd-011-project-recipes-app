import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDrinkAction } from '../redux/actions';

function DrinkCard(props) {
  const { resultDrink } = props;
  const totalRecipes = 12;
  const drinks = resultDrink.filter((_, index) => index < totalRecipes);

  React.useEffect(() => {
    if (!resultDrink.length) {
      const { requestDrink } = props;
      requestDrink();
    }
  }, []);

  return (
    <div>
      {drinks.map((recipe, index) => (
        <div key={ recipe.idDrink } className="card">
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

const mapDispatchToProps = (dispatch) => ({
  requestDrink: () => dispatch(fetchDrinkAction()),
});

DrinkCard.propTypes = {
  resultDrink: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCard);
