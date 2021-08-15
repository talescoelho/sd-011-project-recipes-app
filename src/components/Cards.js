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
  const { ApiCallMeals,
    ApiCallCockTails,
    categorie,
    foodFromSearch,
    DrinkFromSearch } = props;

  const getData = () => {
    if (foodFromSearch) {
      return setMealsAPI(foodFromSearch);
    }
    if (DrinkFromSearch) {
      return SetCocktailsAPI(DrinkFromSearch);
    }
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

  useEffect(getData, [categorie, foodFromSearch, DrinkFromSearch]);

  const renderMeailList = () => {
    if (ApiCallMeals) {
      const maxListRender = 12;
      return (
        <div
          // key={ indexMap }
          // data-testid={ `${indexMap}-recipe-card` }
          className="row row-cols-2 row-cols-sm-2 g-3"
        >
        {mealsAPI.filter((__, index) => index < maxListRender / 2)
          .map((meal, indexMap) => (
              <div className="col">
                <Link to={ { pathname: `/comidas/${meal.idMeal}` } }>
                  <div className="card">
                    <div className="card-body">
                      <h5 data-testid={ `${indexMap}-card-name` } className="card-title">{meal.strMeal}</h5>
                    </div>
                    <img
                        className="card-img-bottom"
                        src={ meal.strMealThumb }
                        alt={ meal.strMeal }
                        data-testid={ `${indexMap}-card-img` }
                    />
                  </div>
                </Link>
              </div> ))}
          {mealsAPI.filter((__, index) => index > 6 && index <= maxListRender)
          .map((meal, indexMap) => (
              <div className="col">
                <Link to={ { pathname: `/comidas/${meal.idMeal}` } }>
                  <div className="card">
                      <div className="card-body">
                        <h5 data-testid={ `${indexMap}-card-name` } className="card-title">{meal.strMeal}</h5>
                      </div>
                    <img
                        className="card-img-bottom"
                        src={ meal.strMealThumb }
                        alt={ meal.strMeal }
                        data-testid={ `${indexMap}-card-img` }
                    />
                  </div>
                </Link>
              </div>))}
            </div>
          )}

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
              className="cards"
            >
              {/* passar estado para o drink */}
              <Link to={ { pathname: `/bebidas/${drink.idDrink}` } }>
                <div>
                  <h5 data-testid={ `${indexMap}-card-name` }>{drink.strDrink}</h5>
                  <img
                    className="card-img"
                    src={ drink.strDrinkThumb }
                    alt={ drink.strDrink }
                    data-testid={ `${indexMap}-card-img` }
                  />
                </div>
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
  foodFromSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
  DrinkFromSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Cards;
