import React from 'react';
import PropTypes from 'prop-types';

const RECOMMENDATION_NUMBER = 6;

function RecipeRecommendationList({ recipes }) {
  const styles = {
    recipeRecommendationList: {
      display: 'flex',
      gap: '32px',
      overflowX: 'auto',
      width: '460px',
      height: '260px',
      listStyle: 'none',
    },
    recipesRecommendationCard: {
      width: '200px',
      flexShrink: '0',
    },
    recipesRecommendationImage: {
      display: 'block',
      width: '100%',
    },
  };

  return (
    <ol style={ styles.recipeRecommendationList }>
      {recipes.slice(0, RECOMMENDATION_NUMBER).map((meal, index) => (
        <li
          style={ styles.recipesRecommendationCard }
          data-testid={ `${index}-recomendation-card` }
          key={ meal.idMeal }
        >
          <img
            style={ styles.recipesRecommendationImage }
            src={ meal.strMealThumb }
            alt={ meal.strMeal }
          />
          <h1
            data-testid={ `${index}-recomendation-title` }
          >
            { meal.strMeal }
          </h1>
        </li>
      ))}
    </ol>
  );
}

export default RecipeRecommendationList;

RecipeRecommendationList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    idMeal: PropTypes.number.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  })).isRequired,
};
