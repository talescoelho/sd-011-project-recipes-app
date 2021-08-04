import PropTypes from 'prop-types';
import React from 'react';

const RecomendationCard = ({ arrayOfRecomendations }) => {
  if (arrayOfRecomendations.meals) {
    const { meals } = arrayOfRecomendations;
    const numberOfMeals = 6;
    const filteredMeals = meals.filter((value, index) => index < numberOfMeals);
    return (
      <div className="div-scroll">
        { filteredMeals.map((meal, index) => {
          const { strMealThumb, strCategory, strMeal } = meal;
          return (
            <div
              className="recomendation-card"
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <img className="img-card" src={ strMealThumb } alt={ strMeal } />
              <p>{ strCategory }</p>
              <h3 data-testid={ `${index}-recomendation-title` }>{ strMeal }</h3>
            </div>
          );
        }) }
      </div>
    );
  }
  const { drinks } = arrayOfRecomendations;
  const numberOfDrinks = 6;
  const filteredDrinks = drinks.filter((value, index) => index < numberOfDrinks);
  return (
    <div className="div-scroll">
      { filteredDrinks.map((drink, index) => {
        const { strDrinkThumb, strCategory: strAlcoholic, strDrink } = drink;
        return (
          <div
            className="recomendation-card"
            key={ index }
            data-testid={ `${index}-recomendation-card` }
          >
            <img className="img-card" src={ strDrinkThumb } alt={ strDrink } />
            <p>{ strAlcoholic }</p>
            <h3 data-testid={ `${index}-recomendation-title` }>{ strDrink }</h3>
          </div>
        );
      }) }
    </div>
  );
};

RecomendationCard.propTypes = {
  arrayOfRecomendations: PropTypes.shape({
    meals: PropTypes.arrayOf(PropTypes.shape({
      strMealThumb: PropTypes.string,
      strCategory: PropTypes.string,
      strMeal: PropTypes.string,
    })),
    drinks: PropTypes.arrayOf(PropTypes.shape({
      strDrinkThumb: PropTypes.string,
      strCategory: PropTypes.string,
      strDrink: PropTypes.string,
    })),
  }).isRequired,
};

export default RecomendationCard;
