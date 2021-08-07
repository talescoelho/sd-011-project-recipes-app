import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchRandomMeal } from '../services/meailAPI';

function ExplorerMeals() {
  const [mealId, setMealId] = useState('');

  useEffect(() => {
    async function getRandom() {
      const meal = await fetchRandomMeal();
      setMealId(meal[0].idMeal);
    }
    getRandom();
  }, []);

  return (
    <div>
      <Header title="Explorar Comidas" />
      <div className="container">
        <div>
          <Link to="/explorar/comidas/ingredientes">
            <button
              className="category-bar-button"
              type="button"
              data-testid="explore-by-ingredient"
            >
              Por Ingredientes
            </button>
          </Link>
        </div>
        <div>
          <Link to="/explorar/comidas/area">
            <button
              className="category-bar-button"
              type="button"
              data-testid="explore-by-area"
            >
              Por Local de Origem
            </button>
          </Link>
        </div>
        <div>
          <Link to={ `/comidas/${mealId}` }>
            <button
              className="category-bar-button"
              type="button"
              data-testid="explore-surprise"
            >
              Me Surpreenda!
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorerMeals;
