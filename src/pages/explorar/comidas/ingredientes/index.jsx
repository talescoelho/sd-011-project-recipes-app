import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import fetchByMealIngredient from '../../../../services/fetchByMealIngredient';
import * as actions from '../../../../actions';

function ComidasIngredientes(props) {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function requestApiSuccess(response) {
    setIngredients(response);
  }

  async function requestApi() {
    setIsLoading(true);
    const response = await fetchByMealIngredient();
    requestApiSuccess(response);
    setIsLoading(false);
  }

  useEffect(() => {
    requestApi();
  }, []);

  function handleIngredient(ingredient) {
    props.filterRecipeByIngredient(ingredient);
  }

  return !isLoading ? (
    <div>
      <Header title="Explorar Ingredientes" />
      {ingredients.map(({ strIngredient: ingredient }, index) => (
        <Link to="/comidas" onClick={ () => handleIngredient(ingredient) } key={ index }>
          <div data-testid={ `${index}-ingredient-card` }>
            <img
              src={ `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png` }
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
  filterRecipeByIngredient: (meal) => dispatch(actions.filterRecipeByIngredient(meal)),
});

ComidasIngredientes.propTypes = ({
  filterRecipeByIngredient: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(ComidasIngredientes);
