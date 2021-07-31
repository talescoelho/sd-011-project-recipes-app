import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { apiRecomendation } from '../../service/apiDetailsId';
import './cecomendadtion.css';

function RecomendationDrink({ recomendInverse }) {
  const diapatch = useDispatch();
  const { recomendation } = useSelector(({ detailsId }) => detailsId);

  useEffect(() => {
    async function getApiRecomendation() {
      diapatch(await apiRecomendation(recomendInverse));
    }

    getApiRecomendation();
  }, [diapatch, recomendInverse]);

  function recomendationDrinks() {
    return (
      recomendation.map(({ strDrinkThumb, strDrink }, index) => (
        <div className="card" key={ index }>
          <img
            data-testid={ `${index}-recomendation-card` }
            src={ strDrinkThumb }
            alt={ strDrink }
          />
          <span
            data-testid={ `${index}-recomendation-title` }
          >
            { strDrink }
          </span>
        </div>
      ))
    );
  }

  function recomendationMeals() {
    return (
      recomendation.map(({ strMealThumb, strMeal }, index) => (
        <div className="card" key={ index }>
          <img
            data-testid={ `${index}-recomendation-card` }
            src={ strMealThumb }
            alt={ strMeal }
          />
          <span
            data-testid={ `${index}-recomendation-title` }
          >
            { strMeal }
          </span>
        </div>
      ))
    );
  }

  return (
    <div className="recomendations">
      { recomendInverse === 'meals'
        ? recomendationDrinks()
        : recomendationMeals() }
    </div>
  );
}

export default RecomendationDrink;

RecomendationDrink.propTypes = {
  recomendInverse: PropTypes.string.isRequired,
};
