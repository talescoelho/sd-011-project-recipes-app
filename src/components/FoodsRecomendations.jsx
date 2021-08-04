import React from 'react';
import PropTypes from 'prop-types';

function FoodsRecomendations(props) {
  const { recomendations } = props;
  const recomendationsNumber = 6;
  return (
    <div className="recomendations-container">
      {recomendations.map((element, index) => {
        if (index < recomendationsNumber) {
          console.log(element);
          return (
            <div key={ element.idMeal } data-testid={ `${index}-recomendation-card` }>
              <img src={ element.strMealThumb } alt="Comida recomendada" />
              <span>{element.strTags}</span>
              <span
                data-testid={ `${index}-recomendation-title` }
              >
                {element.strMeal}
              </span>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

FoodsRecomendations.propTypes = {
  recomendations: PropTypes.arrayOf.isRequired,
};

export default FoodsRecomendations;
