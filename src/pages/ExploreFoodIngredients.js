import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/HeaderFood';
import { getIngredients } from '../services/RequestFood';

function ExploreFoodIngredients() {
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const MAX_RESULT = 12;

  useEffect(() => {
    async function loadIngredients() {
      const request = await getIngredients();
      setIngredientsArray(request);
    }
    loadIngredients();
  }, []);

  function renderCard(object, number) {
    return (
      <Link
        to={ {
          pathname: '/comidas/',
          state: { ingredient: object.strIngredient },
        } }
        key={ number }
      >
        <div data-testid={ `${number}-ingredient-card` }>
          <p data-testid={ `${number}-card-name` }>{ object.strIngredient }</p>
          <img
            data-testid={ `${number}-card-img` }
            src={ `https://www.themealdb.com/images/ingredients/${object.strIngredient}-Small.png` }
            alt={ `${number}-card-name` }
            width="50px"
          />
        </div>
      </Link>
    );
  }

  return (
    <div>
      <Header title="Explorar Ingredientes" search={ false } />
      { ingredientsArray.length === 0 ? <p>loading</p> : ingredientsArray
        .slice(0, MAX_RESULT).map((item, index) => renderCard(item, index)) }
      <Footer />
    </div>
  );
}

export default ExploreFoodIngredients;
