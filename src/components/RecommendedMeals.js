import React from 'react';
import PropTypes from 'prop-types';

export default function RecommendedMeals(props) {
  const { meals } = props;
  return (
    <div className="slider">
      {meals && meals.map((meal, mealIndex) => (
        <div
          className="slide"
          data-testid={ `${mealIndex}-recomendation` }
          id={ meal.idMeal }
          key={ mealIndex }
          // onClick={ goToRecipeDetails }
          // onKeyUp={ goToRecipeDetails }
          // role="button"
          // tabIndex={ mealIndex }
        >
          <img
            alt=""
            data-testid={ `${mealIndex}-recomendation-card` }
            id={ meal.idMeal }
            src={ meal.strMealThumb }
          />
          <span
            data-testid={ `${mealIndex}-recomendation-title` }
            id={ meal.idMeal }
          >
            {meal.strMeal}
          </span>
        </div>))}
    </div>
  );
}

RecommendedMeals.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
};
