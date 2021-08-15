import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import fetchByDrinkIngredient from '../../../../services/fetchByDrinkIngredient';
import * as actions from '../../../../actions';

function BebidasIngredientes(props) {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function requestApiSuccess(response) {
    setIngredients(response);
  }

  useEffect(() => {
    const requestApi = async () => {
      setIsLoading(true);
      const response = await fetchByDrinkIngredient();
      requestApiSuccess(response);
      setIsLoading(false);
    };
    requestApi();
  }, []);

  function handleIngredient(ingredient) {
    props.filterDrinkByIngredient(ingredient);
  }

  return !isLoading ? (
    <div>
      <Header title="Explorar Ingredientes" />
      {ingredients.map(({ strIngredient1: ingredient }, index) => (
        <Link to="/bebidas" onClick={ () => handleIngredient(ingredient) } key={ index }>
          <div data-testid={ `${index}-ingredient-card` }>
            <img
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png` }
              alt=""
              data-testid={ `${index}-card-img` }
            />
            <h4 data-testid={ `${index}-card-name` }>{ingredient}</h4>
          </div>
        </Link>
      ))}
      <Footer />
    </div>
  ) : <span>Loading...</span>;
}

const mapDispatchToProps = (dispatch) => ({
  filterDrinkByIngredient: (drink) => dispatch(actions.filterDrinkByIngredient(drink)),
});

BebidasIngredientes.propTypes = ({
  filterDrinkByIngredient: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(BebidasIngredientes);
