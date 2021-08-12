import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderDrink from '../components/HeaderDrink';
import { getIngredients } from '../services/RequestDrinks';

function ExploreDrinkIngredients() {
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
      <Link to="/bebidas/" key={ number }>
        <div data-testid={ `${number}-ingredient-card` }>
          <p data-testid={ `${number}-card-name` }>{ object.strIngredient1 }</p>
          <img
            data-testid={ `${number}-card-img` }
            src={ `https://www.thecocktaildb.com/images/ingredients/${object.strIngredient1}-Small.png` }
            alt={ `${number}-card-name` }
            width="50px"
          />
        </div>
      </Link>
    );
  }

  return (
    <div>
      <HeaderDrink title="Explorar Ingredientes" search={ false } />
      { ingredientsArray.length === 0 ? <p>loading</p> : ingredientsArray
        .slice(0, MAX_RESULT).map((item, index) => renderCard(item, index)) }
      <Footer />
    </div>
  );
}

export default ExploreDrinkIngredients;
