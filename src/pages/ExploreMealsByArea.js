import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
import { fetchMealsListByArea, fetchMealsByArea,
  fetchDefaultFoodsFromMealsDB } from '../services';
import AreaDropdown from '../components/AreaDropdown';

export default function ExploreMealsByArea({ history }) {
  const [dropdown, setDropdown] = useState([]);
  const [area, setArea] = useState([]);

  const getAreas = async () => {
    const meals = await fetchMealsListByArea();
    setDropdown(meals);
  };

  const getAllMeals = async () => {
    const meals = await fetchDefaultFoodsFromMealsDB();
    setArea(meals);
  };

  const getMealsByArea = async ({ target }) => {
    const mealsMaxCount = 12;
    let meals;
    if (target.value === 'All') {
      meals = await fetchDefaultFoodsFromMealsDB();
    } else {
      meals = await fetchMealsByArea(target.value);
    }
    setArea(meals.slice(0, mealsMaxCount));
  };

  const goToRecipeDetails = (id) => {
    history.push(`/comidas/${id}`);
  };

  useEffect(() => {
    getAreas();
    getAllMeals();
  }, []);

  return (
    <div>
      <Header title="Explorar Origem" />
      <AreaDropdown getMealsByArea={ getMealsByArea } dropdown={ dropdown } />
      <section className="card-list">
        {
          area && area.map((meal, index) => (
            <div
              className="card"
              data-testid={ `${index}-recipe-card` }
              id={ meal.idMeal }
              key={ index }
              onClick={ () => goToRecipeDetails(meal.idMeal) }
              onKeyUp={ () => null }
              role="button"
              tabIndex={ index }
            >
              <img
                alt=""
                data-testid={ `${index}-card-img` }
                id={ meal.idMeal }
                src={ meal.strMealThumb }
              />
              <span
                data-testid={ `${index}-card-name` }
                id={ meal.idMeal }
              >
                {meal.strMeal}
              </span>
            </div>
          ))
        }
      </section>
      <LowerMenu />
    </div>
  );
}

ExploreMealsByArea.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
