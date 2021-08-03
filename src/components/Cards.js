import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchMealsAPI, fetchCocktailsAPI } from '../Services/Data';

function Cards(props) {
  const [mealsAPI, setMealsAPI] = useState([]);
  const [cocktailsAPI, SetCocktailsAPI] = useState([]);
  const { ApiCallMeals, ApiCallCockTails } = props;

  const getData = () => {
    let dataReceived = [];
    if (ApiCallMeals) {
      dataReceived = fetchMealsAPI(setMealsAPI);
    }
    if (ApiCallCockTails) {
      dataReceived = fetchCocktailsAPI(SetCocktailsAPI);
    }

    return dataReceived;
  };

  useEffect(getData, []);

  const renderMeailList = () => {
    if (ApiCallMeals) {
      const maxListRender = 12;
      return (
        mealsAPI.filter((__, index) => index < maxListRender)
          .map((meal, indexMap) => (
            <div
              key={ indexMap }
              data-testid={ `${indexMap}-recipe-card` }
            >
              <Link to={ `/comidas/${meal.idMeal}` }>
                <h5 data-testid={ `${indexMap}-card-name` }>{meal.strMeal}</h5>
                <img
                  src={ meal.strMealThumb }
                  alt={ meal.strMeal }
                  data-testid={ `${indexMap}-card-img` }
                />
              </Link>
            </div>
          ))
      );
    }
  };

  const renderCocktailsList = () => {
    if (ApiCallCockTails) {
      const maxListRender = 12;
      return (
        cocktailsAPI.filter((__, index) => index < maxListRender)
          .map((drink, indexMap) => (
            <div
              key={ indexMap }
              data-testid={ `${indexMap}-recipe-card` }
            >
              <Link to={ `/bebidas/${drink.idMeal}` }>
                <h5 data-testid={ `${indexMap}-card-name` }>{drink.strDrink}</h5>
                <img
                  src={ drink.strDrinkThumb }
                  alt={ drink.strDrink }
                  data-testid={ `${indexMap}-card-img` }
                />
              </Link>
            </div>
          ))
      );
    }
  };

  return (
    <div>
      {renderMeailList()}
      {renderCocktailsList()}
    </div>

  );
}

Cards.propTypes = {
  ApiCallMeals: PropTypes.bool.isRequired,
  ApiCallCockTails: PropTypes.bool.isRequired,
};
export default Cards;
