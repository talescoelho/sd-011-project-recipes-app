import React from 'react';
import PropTypes from 'prop-types';

const local = window.location.href;
const url = 'http://localhost:3000/comidas';

function CardRecipe({ item }) {
  return (
    <div>
      { local === url
        ? (
          <div>
            { item.strMeal }
          </div>
        ) : (
          <div>
            { item.strDrink }
            <img src={ item.strDrinkThumb } alt={ item.strDrink } width="50px" />
          </div>
        ) }
    </div>
  );
}

CardRecipe.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CardRecipe;
