import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header/Header';

const Foods = ({ ingredients, loading }) => (
  <>
    <Header
      page="Comidas"
      showSearchBtn
    />
    {loading && <div>CARREGANDO...</div>}

    <ul>
      {
        !loading && ingredients.map(
          (value, index) => (
            <li key={ index }>
              <h3>{value.strMeal}</h3>
              <img src={ value.strMealThumb } alt="Imagem com ingredientes" />
            </li>),
        )
      }

      {/* {
        !loading && !ingredients && name.map(
          (value, index) => (
            <li key={ index }>

            </li>
          )
        )
      } */}
    </ul>
    <div>Pagina de Comidas</div>
  </>
);

Foods.propTypes = ({
  ingredients: PropTypes.array,
  loading: PropTypes.bool,
}).isRequired;

const mapStateToProps = (state) => ({
  ingredients: state.handleIngredients.ingredient,
  loading: state.handleIngredients.loading,
});

export default connect(mapStateToProps, null)(Foods);
