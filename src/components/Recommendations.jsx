import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';
// import RecipeCard from '../components/RecipeCard';
// import { APImealById } from '../services/APImealsANDdrinks';

function Recommendations() {
  const { drinks } = useContext(UserContext);
  return (
    <div>
      <h2>Recomendadas</h2>
      <div
        id="drink"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {
            drinks.map((drink, index) => (index < '6' ? (
              <div
                className={ (index < 2) ? 'carousel-item active' : 'carousel-item' }
                data-testid={ `${index}-recomendation-card` }
                key={ index }
              >
                <p>{drink.strAlcoholic}</p>
                <h2
                  data-testid={ `${index}-recomendation-title` }
                >
                  {drink.strDrink}
                </h2>
                <img
                  src={ drink.strDrinkThumb }
                  className="d-flex w-180"
                  width="150"
                  height="100"
                  alt={ drink.strDrink }
                  data-testid={ `${index}-card-img` }
                />
              </div>
            ) : undefined))
          }
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#drink"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#drink"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;

// corrigir proptypes
// Recommendations.propTypes = {
//   match: PropTypes.objectOf(PropTypes.object).isRequired,
// params: PropTypes.objectOf(PropTypes.object).isRequired,
// id: PropTypes.string.isRequired,
// };
