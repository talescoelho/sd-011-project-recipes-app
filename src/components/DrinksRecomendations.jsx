import React from 'react';
import PropTypes from 'prop-types';

function DrinksRecomendations(props) {
  const { recomendations } = props;
  const recomendationsNumber = 6;
  return (
    <div className="recomendations-container">
      {recomendations.map((element, index) => {
        if (index < recomendationsNumber) {
          return (
            <div key={ element.idDrink } data-testid={ `${index}-recomendation-card` }>
              <img src={ element.strDrinkThumb } alt="Bebida recomendada" />
              <span>{element.strAlcoholic}</span>
              <span
                data-testid={ `${index}-recomendation-title` }
              >
                {element.strDrink}
              </span>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

DrinksRecomendations.propTypes = ({
  recomendations: PropTypes.arrayOf.isRequired,
});

export default DrinksRecomendations;
