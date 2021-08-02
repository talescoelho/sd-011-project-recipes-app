import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDrinkAction } from '../redux/actions';

function DrinkCard(props) {
  const { resultDrink, requestDrink } = props;
  const totalRecipes = 12;
  const drinks = resultDrink && resultDrink.filter((_, index) => index < totalRecipes);

  React.useEffect(() => {
    if (!resultDrink.length) {
      requestDrink();
    }
  }, [resultDrink, requestDrink]);

  if (!drinks) {
    requestDrink();
    return <p>Carregando...</p>;
  }

  return (
    <div>
      {drinks.map((recipe, index) => (
        <Link key={ recipe.idDrink } to={ `/bebidas/${recipe.idDrink}` }>
          <div className="card">
            <div key={ recipe.idDrink } data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ recipe.strDrinkThumb }
                alt={ recipe.strDrink }
                width="60px"
              />
              <h4 data-testid={ `${index}-card-name` }>{ recipe.strDrink }</h4>
            </div>
          </div>
        </Link>
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
