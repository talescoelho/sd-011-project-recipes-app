import React, { useEffect, useState } from 'react';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import fetchByDrinkIngredient from '../../../../services/fetchByDrinkIngredient';

export default function BebidasIngredientes() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function requestApiSuccess(response) {
    setIngredients(response);
  }

  async function requestApi() {
    setIsLoading(true);
    const response = await fetchByDrinkIngredient();
    requestApiSuccess(response);
    setIsLoading(false);
  }

  useEffect(() => {
    requestApi();
  }, []);

  return !isLoading ? (
    <div>
      <Header title="Explorar Ingredientes" />
      {ingredients.map(({ strIngredient1: ingredient }, index) => (
        <div key={ index }>
          <div data-testid={ `${index}-ingredient-card` }>
            <img
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png` }
              alt=""
              data-testid={ `${index}-card-img` }
            />
            <h4 data-testid={ `${index}-card-name` }>{ingredient}</h4>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  ) : <span>Loading...</span>;
}
