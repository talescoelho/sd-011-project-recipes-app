import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import fetchByMealIngredient from '../../../../services/fetchByMealIngredient';

export default function ComidasIngredientes() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function requestApiSuccess(response) {
    setIngredients(response);
  }

  async function requestApi() {
    setIsLoading(true);
    const response = await fetchByMealIngredient();
    requestApiSuccess(response);
    setIsLoading(false);
  }

  useEffect(() => {
    requestApi();
  }, []);

  return !isLoading ? (
    <div>
      <Header title="Explorar Ingredientes" />
      {ingredients.map(({ strIngredient: ingredient }, index) => (
        <Link to="/comidas" key={ index }>
          <div data-testid={ `${index}-ingredient-card` }>
            <img
              src={ `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png` }
              alt=""
              data-testid={ `${index}-card-img` }
            />
            <h4 data-testid={ `${index}-card-name` }>{ingredient}</h4>
          </div>
        </Link>
      ))}
      <Footer />
    </div>
  ) : <span>Loading...</span>;
}
