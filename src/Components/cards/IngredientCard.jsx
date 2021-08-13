import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

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
            <div key={ index }>
              {/* <Redirect to="/bebidas"> */}
                <div key={ index } data-testid={ `${index}-ingredient-card` }>
                  <h5
                    data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}
                  </h5>
                  <img
                    src={ `${imgDrink}${ingredient.strIngredient1}-Small.png` }
                    alt={ ingredient.strIngredient1 }
                    data-testid={ `${index}-card-img` }
                  />
                </div>
              {/* </Redirect> */}
            </div>
          ))
      );
    }
    if (!drink) {
      return (
        ingredientsListRender.filter((__, index) => index < maxListRender)
          .map((ingredient, index) => (
            <div key={ index }>
              {/* <Redirect to="/comidas"> */}
                <div key={ index } data-testid={ `${index}-ingredient-card` }>
                  <h5 data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</h5>
                  <img
                    src={ `${imgFood}${ingredient.strIngredient}-Small.png` }
                    alt={ ingredient.strIngredient }
                    data-testid={ `${index}-card-img` }
                  />
                </div>
              {/* </Redirect> */}
            </div>
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
