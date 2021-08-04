import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function MealtIngredients() {
  const [foodIngredients, setFoodIngredients] = useState([]);
  const numberTwelve = 12;

  useEffect(() => {
    const getIngredients = async () => {
      const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
      const results = await fetch(endpoint).then((data) => data.json());
      const { meals } = results;
      setFoodIngredients(meals);
    };

    getIngredients();
  }, []);

  const renderMealt = () => (
    foodIngredients.map((ingredient, index) => (
      index < numberTwelve ? (
        <div data-testid={ `${index}-ingredient-card` }>
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
            alt={ ingredient.strIngredient }
          />
          <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
        </div>
      ) : null
    ))
  );

  return (
    <div>
      <Header pageName="Explorar Ingredientes" />
      <h1>Explore Mealt Ingredients</h1>
      {renderMealt()}
    </div>
  );
}
