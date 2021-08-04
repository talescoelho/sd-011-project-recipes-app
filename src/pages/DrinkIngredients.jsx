import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
// import { Link } from 'react-router-dom';

export default function DrinkIngredients() {
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const numberTwelve = 12;

  useEffect(() => {
    const getIngredients = async () => {
      const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
      const results = await fetch(endpoint).then((data) => data.json());
      const { drinks } = results;
      setDrinkIngredients(drinks);
    };

    getIngredients();
  }, []);

  const renderDrink = () => (
    drinkIngredients.map((ingredient, index) => (
      index < numberTwelve ? (
        <div data-testid={ `${index}-ingredient-card` }>
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
            alt={ ingredient.strIngredient1 }
          />
          <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
          {/* <Link >
            <button></button>
          </Link> */}
        </div>
      ) : null
    ))
  );

  return (
    <div>
      <Header pageName="Explorar Ingredientes" />
      <h1>Explore Drink Ingredients</h1>
      {renderDrink()}
    </div>
  );
}
