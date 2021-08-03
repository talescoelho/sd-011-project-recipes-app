import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  fetchMealsAPI,
  fetchCocktailsAPI,
  fetchMealsForCategorie,
  fetchCocktailsForCategorie,
} from '../Services/Data';

function Cards(props) {
  const [mealsAPI, setMealsAPI] = useState([]);
  const [cocktailsAPI, SetCocktailsAPI] = useState([]);
  const { ApiCallMeals, ApiCallCockTails, categorie } = props;

  const getData = () => {
    if (ApiCallMeals && categorie === null) {
      fetchMealsAPI(setMealsAPI);
    }
    if (ApiCallCockTails && categorie === null) {
      fetchCocktailsAPI(SetCocktailsAPI);
    }
    if (ApiCallMeals && categorie !== null) {
      fetchMealsForCategorie(setMealsAPI, categorie);
    }
    if (ApiCallCockTails && categorie !== null) {
      // const newStringCategorie = categorie.replace(/ /gi, '_');
      fetchCocktailsForCategorie(SetCocktailsAPI, categorie);
    }
  };

  useEffect(getData, [categorie]);

  const renderMeailList = () => {
    if (ApiCallMeals) {
      const maxListRender = 12;
      return (
        mealsAPI.filter((__, index) => index < maxListRender)
          .map((meal, indexMap) => (
            <div
              key={ indexMap }
              data-testid={ `${indexMap}-recipe-card` }
              className="cards"
            >
              <Link to={ `/comidas/${meal.idMeal}` }>
                <h5 data-testid={ `${indexMap}-card-name` }>{meal.strMeal}</h5>
                <img
                  className="card-img"
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
      console.log('cards', cocktailsAPI);
      return (
        cocktailsAPI.filter((__, index) => index < maxListRender)
          .map((drink, indexMap) => (
            <div
              key={ indexMap }
              data-testid={ `${indexMap}-recipe-card` }
              className="cards"
            >
              <Link to={ `/bebidas/${drink.idMeal}` }>
                <h5 data-testid={ `${indexMap}-card-name` }>{drink.strDrink}</h5>
                <img
                  className="card-img"
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
  categorie: PropTypes.string.isRequired,
};
export default Cards;
