import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { requestMealsArea, requestMealsByArea } from '../services/requestFoodArea';
import UserContext from '../context/UserContext';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';

export default function FoodArea({ history }) {
  const { meals } = useContext(UserContext);
  const [foodArea, setFoodArea] = useState([]);
  const [mealsOP, setmealsOP] = useState(['All']);
  const [mOP, setMeal] = useState([]);
  useEffect(() => {
    const callAPIarea = async () => {
      const callAPI = await requestMealsArea();
      const result = callAPI.meals;
      setFoodArea(result);
    };
    callAPIarea();
    const callAPImeals = async () => {
      const callAPI = await requestMealsByArea(mealsOP);
      const result = callAPI.meals;
      setMeal(result);
    };
    callAPImeals();
  }, [mealsOP]);
  function callMeal({ target }) {
    const { value } = target;
    setmealsOP(value);
  }
  function clickDetails(id) {
    history.push(`/comidas/${id}`);
  }
  const doze = 12;
  const exploreIngredient = 'Explorar Origem';
  function renderDropdown() {
    return (
      <select
        name="dropdown-area"
        data-testid="explore-by-area-dropdown"
        onChange={ (e) => callMeal(e) }
      >
        <option
          key={ 0 }
          data-testid="All-option"
          value="All"
        >
          All
        </option>
        {foodArea.map((area, index) => (
          <option
            key={ index + 1 }
            data-testid={ `${area.strArea}-option` }
            value={ area.strArea }
          >
            { area.strArea }
          </option>
        ))}
      </select>

    );
  }
  if (!foodArea) return <div>is loading...</div>;
  if (mealsOP[0] === 'All') {
    return (
      <>
        <Header title={ exploreIngredient } />
        { renderDropdown() }
        <section className="meals">
          {meals.map((meal, index) => (index < doze ? (
            <button
              type="button"
              className="meal"
              key={ meal.idMeal }
              data-testid={ `${index}-recipe-card` }
              onClick={ () => clickDetails(meal.idMeal) }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ meal.strMealThumb }
                alt={ `imagem do ${meal.idMeal}` }
              />
              <p data-testid={ `${index}-card-name` }>{meal.strMeal}</p>
            </button>
          ) : undefined))}
        </section>
        <FooterMenu />
      </>
    );
  }
  if (!mOP) return <div>is loading...</div>;
  return (
    <>
      <Header title={ exploreIngredient } />
      { renderDropdown() }
      <section className="meals">
        {mOP.map((meal, index) => (index < doze ? (
          <button
            type="button"
            className="meal"
            key={ meal.idMeal }
            data-testid={ `${index}-recipe-card` }
            onClick={ () => clickDetails(meal.idMeal) }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ meal.strMealThumb }
              alt={ `imagem do ${meal.idMeal}` }
            />
            <p data-testid={ `${index}-card-name` }>{meal.strMeal}</p>
          </button>
        ) : undefined))}
      </section>
      <FooterMenu />
    </>
  );
}

FoodArea.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
