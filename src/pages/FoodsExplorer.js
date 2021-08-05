import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function FoodsExplorer() {
  const pageTitle = {
    pageName: 'Explorar Comidas',
    setIcon: false,
  };
  const [surpriseMeal, setSurpriseMeal] = useState(0);

  useEffect(() => {
    const getRandmomMeal = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => res.json());
      return setSurpriseMeal(response.meals[0].idMeal);
    };
    getRandmomMeal();
  }, []);
  const randomId = surpriseMeal;

  function surprise() {
    if (randomId > 0) {
      return (
        <Link to={ `/comidas/${randomId}` }>
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
      <Link to="/explorar/comidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          name="Por Ingredientes"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button
          type="button"
          data-testid="explore-by-area"
          name="Por Local de Origem"
        >
          Por Local de Origem
        </button>
      </Link>
      {
        surprise()
      }
      <FooterMenu />
    </div>
  );
}
