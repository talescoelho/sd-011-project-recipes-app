/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  requestMealsMenu,
  requestMealsFilters,
  requestMealsByFilter,
} from '../redux/actions/menuReducerActions';
import {
  fetchIngredients,
  fetchByName,
  fetchByFirstLetter,
} from '../redux/actions/IngredientsApiAction';

import FilterMenu from '../components/FilterMenu';
import Footer from '../components/common/Footer';
import Header from '../components/Header/Header';
import RecipeCard from '../components/common/RecipeCard';

const Foods = ({
  dispatch,
  error,
  loadingFilterOptions,
  categoryNames,
  loadingMeals,
  meals,
  mealId,
}) => {
  const [selectedRadio, setSelectedRadio] = useState('');
  const [typeIngredient, setTypeIngredient] = useState('');

  const handleIngredient = ({ target }) => { setTypeIngredient(target.value); };

  useEffect(() => {
    dispatch(requestMealsFilters());
  }, [dispatch]);

  const handleRadioButton = () => {
    if (selectedRadio === 'ingrediente') {
      dispatch(fetchIngredients(typeIngredient));
    }
    if (selectedRadio === 'name') {
      dispatch(fetchByName(typeIngredient));
    }
    if (selectedRadio === 'first-letter') {
      if (typeIngredient.length > 1) {
        alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        dispatch(fetchByFirstLetter(typeIngredient));
      }
    }
  };

  if (error) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  if (selectedRadio && meals.length === 1) {
    return <Redirect to={ `/comidas/${mealId}` } />;
  }
  return (
    <>
      <nav>
        <Header
          page="Comidas"
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
                requestMenu={ requestMealsMenu }
                categoryNames={ categoryNames }
                filterByCategory={ requestMealsByFilter }
              />
            )
        }
      </nav>
      <main>
        {
          (loadingMeals)
            ? (<div>Loading...</div>)
            : (
              meals.map(({ idMeal, strMeal, strMealThumb }, index) => (
                <RecipeCard
                  key={ index }
                  index={ index }
                  cardType="comida"
                  cardTestId="-recipe-card"
                  recipeId={ idMeal }
                  recipeThumb={ strMealThumb }
                  recipeName={ strMeal }
                  titleTestId="-card-name"
                />
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
  meals: state.menuReducer.menu,
  mealId: state.menuReducer.mealId,
  loadingMeals: state.menuReducer.isLoading,
  error: state.menuReducer.error,
});

Foods.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loadingFilterOptions: PropTypes.bool.isRequired,
  categoryNames: PropTypes.arrayOf(PropTypes.string),
  loadingMeals: PropTypes.bool.isRequired,
  error: PropTypes.string,
  meals: PropTypes.arrayOf(PropTypes.object),
  mealId: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Foods.defaultProps = {
  categoryNames: [],
  meals: [],
  error: null,
};

export default connect(mapStateToProps)(Foods);
