import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

function CardsExplore(props) {
  const { ingredientesList, drink } = props;

  const imagemFood = 'https://www.themealdb.com/images/ingredients/';
  const imageDrink = 'https://www.thecocktaildb.com/images/ingredients/';

  const renderIngredientesList = (ingredientesListRender) => {
    const maxListRender = 12;
    if (drink) {
      return (
        ingredientesListRender.filter((__, index) => index < maxListRender)
          .map((ingrediente, index) => (
            <div key={ index }>
              <Redirect to="/comidas">
                <div
                  data-testid={ `${index}-ingredient-card` }
                  className="cards"
                >
                  <h5 data-testid={ `${index}-card-name` }>
                    {ingrediente.strIngredient1}
                  </h5>
                  <img
                    className="card-img"
                    src={ `${imageDrink}${ingrediente.strIngredient1}-Small.png` }
                    alt={ ingrediente.strIngredient1 }
                    data-testid={ `${index}-card-img` }
                  />
                </div>
              </Redirect>
            </div>
          )));
    }
    if (!drink) {
      return (
        ingredientesListRender.filter((__, index) => index < maxListRender)
          .map((ingrediente, index) => (
            <div
              key={ index }
              data-testid={ `${index}-ingredient-card` }
              className="cards"
            >
              <div>
                <h5 data-testid={ `${index}-card-name` }>{ingrediente.strIngredient}</h5>
                <img
                  className="card-img"
                  src={ `${imagemFood}${ingrediente.strIngredient}-Small.png` }
                  alt={ ingrediente.strIngredient }
                  data-testid={ `${index}-card-img` }
                />
              </div>
            </div>
          )));
    }
  };

  const getData = () => {
    if (ingredientesList) {
      return renderIngredientesList(ingredientesList);
    }
  };

  useEffect(getData, []);

  return (
    <div>
      {renderIngredientesList(ingredientesList)}
    </div>

  );
}
CardsExplore.propTypes = {
  ingredientesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  drink: PropTypes.bool.isRequired,
};
export default CardsExplore;
