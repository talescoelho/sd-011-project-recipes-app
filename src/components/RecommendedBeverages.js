import React from 'react';
import PropTypes from 'prop-types';

export default function RecommendedBeverages(props) {
  const { beverages } = props;
  return (
    <div className="slider">
      {beverages && beverages.map((drink, beverageIndex) => (
        <div
          className="slide"
          data-testid={ `${beverageIndex}-recomendation` }
          id={ drink.idDrink }
          key={ beverageIndex }
          // onClick={ goToRecipeDetails }
          // onKeyUp={ goToRecipeDetails }
          // role="button"
          // tabIndex={ beverageIndex }
        >
          <img
            alt=""
            data-testid={ `${beverageIndex}-recomendation-card` }
            id={ drink.idDrink }
            src={ drink.strDrinkThumb }
          />
          <span
            data-testid={ `${beverageIndex}-recomendation-title` }
            id={ drink.idDrink }
          >
            {drink.strDrink}
          </span>
        </div>))}
    </div>
  );
}

RecommendedBeverages.propTypes = {
  beverages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
