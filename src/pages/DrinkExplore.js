import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

const DrinkExplore = () => {
  document.title = 'Explorar Bebidas';
  const [randomDrink, setRandomDrink] = useState(undefined);

  useEffect(() => {
    const fetchRandomDrink = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const json = await response.json();
      if (!randomDrink) {
        const getDrinkId = json.drinks.map((drink) => drink.idDrink);
        setRandomDrink(getDrinkId);
      }
      return null;
    };
    fetchRandomDrink();
  }, [randomDrink]);

  return (
    <div className="body-b">
      <Header />
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to={ `/bebidas/${randomDrink}` }>
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
export default DrinkExplore;
