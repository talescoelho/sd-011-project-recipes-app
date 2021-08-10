import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchRandomCocktail } from '../services/cocktailAPI';

function ExplorerDrinks() {
  const [drinkId, setDrinkId] = useState('');

  useEffect(() => {
    async function getRandom() {
      const drink = await fetchRandomCocktail();
      setDrinkId(drink[0].idDrink);
    }
    getRandom();
  }, []);
  return (
    <>
      <Header title="Explorar Bebidas" />
      <div className="container">
        <div>
          <Link to="/explorar/bebidas/ingredientes">
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
          <Link to={ `/bebidas/${drinkId}` }>
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
    </>
  );
}

export default ExplorerDrinks;
