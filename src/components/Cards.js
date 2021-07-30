import React, { useState, useEffect } from 'react';
import { fetchMealsAPI, fetchCocktailsAPI } from '../Services/Data';

function Cards() {
  const [mealsAPI, setMealsAPI] = useState([]);
  const [cocktailsAPI, SetCocktailsAPI] = useState([]);

  const getData = () => {
    const dataReceivedMeals = fetchMealsAPI(setMealsAPI);
    const dataReceivedCocktails = fetchCocktailsAPI(SetCocktailsAPI);
    const dataObjectAPI = {
      dataReceivedMeals,
      dataReceivedCocktails,
    };
    return dataObjectAPI;
  };

  useEffect(getData, []);

  const renderMeailList = () => {
    const maxListRender = 12;
    return (
      mealsAPI.filter((__, index) => index < maxListRender)
        .map((meal, indexMap) => (
          <div
            key={ indexMap }
            data-testid={ `${indexMap}-recipe-card` }
          >
            <h5 data-testid={ `${indexMap}-card-name` }>{meal.strMeal}</h5>
            <img src="" alt={ meal.strMeal } data-testid={ `${indexMap}-card-img` } />
          </div>
        ))
    );
  };

  const renderCocktailsList = () => {
    const maxListRender = 12;
    return (
      cocktailsAPI.filter((__, index) => index < maxListRender)
        .map((meal, indexMap) => (
          <div
            key={ indexMap }
            data-testid={ `${indexMap}-recipe-card` }
          >
            <h5 data-testid={ `${indexMap}-card-name` }>{meal.strDrink}</h5>
            <img src="" alt={ meal.strDrink } data-testid={ `${indexMap}-card-img` } />
          </div>
        ))
    );
  };

  return (
    <div>
      {renderMeailList()}
      {/* {renderCocktailsList()} */}
    </div>

  );
}

export default Cards;
