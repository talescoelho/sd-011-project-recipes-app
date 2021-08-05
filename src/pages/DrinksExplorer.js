import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function DrinksExplorer() {
  const pageTitle = {
    pageName: 'Explorar Bebidas',
    setIcon: false,
  };
  const [surpriseDrink, setSurpriseDrink] = useState(0);

  useEffect(() => {
    const getRandmomDrink = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((res) => res.json());
      return setSurpriseDrink(response.drinks[0].idDrink);
    };
    getRandmomDrink();
  }, []);
  const randomId = surpriseDrink;

  function surprise() {
    if (randomId > 0) {
      return (
        <Link to={ `/bebidas/${randomId}` }>
          <button
            type="button"
            data-testid="explore-surprise"
            name="Me Surpreenda!"
          >
            Me Surpreenda!
          </button>
        </Link>
      );
    }
    return <span> carregando...</span>;
  }

  return (
    <div>
      <Header value={ pageTitle } />
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          name="Por Ingredientes"
        >
          Por Ingredientes
        </button>
      </Link>
      {
        surprise()
      }
      <FooterMenu />
    </div>
  );
}
