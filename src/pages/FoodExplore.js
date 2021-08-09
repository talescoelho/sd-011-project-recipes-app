import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

const FoodExplore = () => {
  document.title = 'Explorar Comidas';
  const [randomFood, setRandomFood] = useState(undefined);

  useEffect(() => {
    const fetchRandomFood = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const json = await response.json();
      if (!randomFood) {
        const getMealId = json.meals.map((meal) => meal.idMeal);
        setRandomFood(getMealId);
      }
      return null;
    };
    fetchRandomFood();
  }, [randomFood]);

  return (
    <div>
      <Header />
      <Link to="/explorar/comidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button
          type="button"
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
      </Link>
      <Link to={ `/comidas/${randomFood}` }>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </Link>
      <FooterMenu />
    </div>
  );
};

export default FoodExplore;
