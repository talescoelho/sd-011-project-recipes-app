import React from 'react';
import PropTypes from 'prop-types';

const local = window.location.href;
const url = 'http://localhost:3000/comidas';

function CardRecipe({ item, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      { local === url
        ? (
          <div>
            <p data-testid={ `${index}-card-name` }>{ item.strMeal }</p>
            <img
              data-testid={ `${index}-card-img` }
              src={ item.strMealThumb }
              alt={ item.strMeal }
              width="50px"
            />
          </div>
        ) : (
          <div>
            <p data-testid={ `${index}-card-name` }>{ item.strDrink }</p>
            <img
              data-testid={ `${index}-card-img` }
              src={ item.strDrinkThumb }
              alt={ item.strDrink }
              width="50px"
            />
          </div>
        ) }
    </div>
  );
}

CardRecipe.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default CardRecipe;
