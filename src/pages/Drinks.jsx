/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
  requestDrinkMenu,
  requestDrinksFilters,
  requestDrinksByFilter,
} from '../redux/actions/menuReducerActions';
import {
  fetchDrinksIngredient,
  fetchDrinksByName,
  fetchDrinksByFirstLetter,
} from '../redux/actions/IngredientsApiAction';
import FilterMenu from '../components/FilterMenu';
import Footer from '../components/common/Footer';
import Header from '../components/Header/Header';

const Drinks = ({
  dispatch,
  error,
  loadingFilterOptions,
  categoryNames,
  loadingDrinks,
  drinks,
  drinkId,
}) => {
  const [selectedRadio, setSelectedRadio] = useState('');
  const [typeIngredient, setTypeIngredient] = useState('');

  const handleIngredient = ({ target }) => { setTypeIngredient(target.value); };

  useEffect(() => {
    dispatch(requestDrinksFilters());
  }, [dispatch]);

  const handleRadioButton = () => {
    if (selectedRadio === 'ingrediente') {
      dispatch(fetchDrinksIngredient(typeIngredient));
    }
    if (selectedRadio === 'name') {
      dispatch(fetchDrinksByName(typeIngredient));
    }
    if (selectedRadio === 'first-letter') {
      if (typeIngredient.length > 1) {
        alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        dispatch(fetchDrinksByFirstLetter(typeIngredient));
      }
    }
  };

  if (error) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  if (drinks.length === 1) {
    return <Redirect to={ `/bebidas/${drinkId}` } />;
  }
  return (
    <>
      <nav>
        <Header
          page="Bebidas"
          showSearchBtn
          radioOption={ ({ target: { value } }) => setSelectedRadio(value) }
          sendRadioInfo={ () => handleRadioButton() }
          typedIngredient={ handleIngredient }
        />
        {
          (loadingFilterOptions)
            ? (<div>Loading...</div>)
            : (
              <FilterMenu
                requestMenu={ requestDrinkMenu }
                categoryNames={ categoryNames }
                filterByCategory={ requestDrinksByFilter }
              />
            )
        }
      </nav>
      <main>
        {
          (loadingDrinks)
            ? (<div>Loading...</div>)
            : (
              drinks.map(({ idDrink, strDrink, strDrinkThumb }, index) => (
                <Link
                  aria-label="card-menu"
                  data-testid={ `${index}-recipe-card` }
                  key={ index }
                  to={ `/bebidas/${idDrink}` }
                >
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ strDrinkThumb }
                    alt={ `${strDrink} recipe` }
                    width="100px"
                  />
                  <h3 data-testid={ `${index}-card-name` }>{strDrink}</h3>
                </Link>
              ))
            )
        }
      </main>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  loadingFilterOptions: state.menuReducer.filters.isLoading,
  categoryNames: state.menuReducer.filters.options,
  drinks: state.menuReducer.menu,
  drinkId: state.menuReducer.drinkId,
  loadingDrinks: state.menuReducer.isLoading,
  error: state.menuReducer.error,
});

Drinks.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loadingFilterOptions: PropTypes.bool.isRequired,
  categoryNames: PropTypes.arrayOf(PropTypes.string),
  loadingDrinks: PropTypes.bool.isRequired,
  error: PropTypes.string,
  drinks: PropTypes.arrayOf(PropTypes.object),
  drinkId: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Drinks.defaultProps = {
  categoryNames: [],
  drinks: [],
  error: null,
};

export default connect(mapStateToProps)(Drinks);
