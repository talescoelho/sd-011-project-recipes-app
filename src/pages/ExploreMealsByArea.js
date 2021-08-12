import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
import { fetchMealsListByArea, fetchMealsByArea,
  fetchDefaultFoodsFromMealsDB } from '../services';
import AreaDropdown from '../components/AreaDropdown';
import GlobalContext from '../context';

export default function ExploreMealsByArea({ history }) {
  const [dropdown, setDropdown] = useState([]);
  const [area, setArea] = useState([]);
  const { loading, setLoading } = useContext(GlobalContext);

  const getAreas = async () => {
    setLoading(true);
    const meals = await fetchMealsListByArea();
    setDropdown(meals);
    setLoading(true);
  };

  const getAllMeals = async () => {
    setLoading(true);
    const meals = await fetchDefaultFoodsFromMealsDB();
    setArea(meals);
    setLoading(false);
  };

  const getMealsByArea = async ({ target }) => {
    setLoading(true);
    const mealsMaxCount = 12;
    let meals;
    if (target.value === 'All') {
      meals = await fetchDefaultFoodsFromMealsDB();
    } else {
      meals = await fetchMealsByArea(target.value);
    }
    setArea(meals.slice(0, mealsMaxCount));
    setLoading(false);
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
          !loading && area ? area.map((meal, index) => (
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
            : <span className="loading" />
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
