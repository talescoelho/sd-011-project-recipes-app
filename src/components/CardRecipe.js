import React from 'react';
import PropTypes from 'prop-types';

const local = window.location.href;
const url = 'http://localhost:3000/comidas';

function CardRecipe({ item, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      { local === url
        ? (
          <div data-testid={ `${index}-recipe-card` }>
            {
              item.strMeal ? <p data-testid={ `${index}-card-name` }>{ item.strMeal }</p>
                : (
                  <p data-testid={ `${item.strCategory}-category-filter` }>
                    { item.strCategory }
                  </p>)
            }

            <img
              data-testid={ `${index}-card-img` }
              src={ item.strMealThumb ? item.strMealThumb : item.strCategoryThumb }
              alt={ `${index}-card-name` }
              width="50px"
            />
          </div>
        ) : (
          <div>
            <p data-testid={ `${index}-card-name` }>
              { item.strDrink ? item.strDrink : item.strCategory }
            </p>
            <img
              data-testid={ `${index}-card-img` }
              src={ item.strDrinkThumb ? item.strDrinkThumb : 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg' }
              alt={ `${index}-card-name` }
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
