import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

function ExploreFoodOrDrink({ foodOrDrink }) {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function randomFetch() {
    setLoading(true);
    let endPoint = 'https://www.themealdb.com/api/json/v1/1/random.php';
    if (foodOrDrink === 'Bebidas') {
      endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    }
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = foodOrDrink === 'Comidas' ? response.meals : response.drinks;
    if (foodOrDrink === 'Comidas') {
      history.push(`/comidas/${data[0].idMeal}`);
      return;
    }
    history.push(`/bebidas/${data[0].idDrink}`);
  }

  return (
    <div>
      {loading ? <span>Carregando...</span> : (
        <div>
          <Link
            to={ foodOrDrink === 'Comidas' ? '/explorar/comidas/ingredientes'
              : '/explorar/bebidas/ingredientes' }
          >
            <button type="button" data-testid="explore-by-ingredient">
              Por Ingredientes
            </button>
          </Link>
          {foodOrDrink === 'Comidas' && (
            <Link to="/explorar/comidas/area">
              <button
                type="button"
                data-testid="explore-by-area"
              >
                Por Local de Origem
              </button>
            </Link>
          )}
          <button
            type="button"
            data-testid="explore-surprise"
            onClick={ randomFetch }
          >
            Me Surpreenda!
          </button>
        </div>
      )}
    </div>
  );
}

export default ExploreFoodOrDrink;

ExploreFoodOrDrink.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
};
