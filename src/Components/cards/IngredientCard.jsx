import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function IngredientCard(props) {
  const { ingredientsList, drink } = props;

  const imgFood = 'https://www.themealdb.com/images/ingredients/';
  const imgDrink = 'https://www.thecocktaildb.com/images/ingredients/';

  const renderIngredientsList = (ingredientsListRender) => {
    const maxListRender = 12;
    if (drink) {
      return (
        ingredientsListRender.filter((__, index) => index < maxListRender)
          .map((ingredient, index) => (
            <Link
              key={ index }
              to={ { pathname: '/comidas', ingredient: ingredient.strIngredient1 } }
            >
              <div key={ index }>
                <div
                  key={ index }
                  data-testid={ `${index}-ingredient-card` }
                  style={ { display: 'flex' } }
                >
                  <h5
                    data-testid={ `${index}-card-name` }
                  >
                    {ingredient.strIngredient1}
                  </h5>
                  <img
                    src={ `${imgDrink}${ingredient.strIngredient1}-Small.png` }
                    alt={ ingredient.strIngredient1 }
                    data-testid={ `${index}-card-img` }
                    style={ { width: '30px' } }
                  />
                </div>
              </div>
            </Link>
          ))
      );
    }
    if (!drink) {
      return (
        ingredientsListRender.filter((__, index) => index < maxListRender)
          .map((ingredient, index) => (
            <Link
              key={ index }
              to={ { pathname: '/comidas', ingredient: ingredient.strIngredient1 } }
            >
              <div key={ index }>
                <div
                  key={ index }
                  data-testid={ `${index}-ingredient-card` }
                  style={ { display: 'flex' } }
                >
                  <h5 data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</h5>
                  <img
                    src={ `${imgFood}${ingredient.strIngredient}-Small.png` }
                    alt={ ingredient.strIngredient }
                    data-testid={ `${index}-card-img` }
                    style={ { width: '30px' } }
                  />
                </div>
              </div>
            </Link>
          ))
      );
    }
  };

  useEffect(() => {
    if (ingredientsList) return renderIngredientsList(ingredientsList);
  }, []);

  return (
    <div>
      {renderIngredientsList(ingredientsList)}
    </div>

  );
}

IngredientCard.propTypes = {
  ingredientsList: PropTypes.arrayOf(PropTypes.object),
  drink: PropTypes.bool,
}.isRequired;
