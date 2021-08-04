import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import randomFetchApiDrink from '../../../services/randomFetchApiDrink';

export default function ExplorarBebidas() {
  const history = useHistory();
  const handleClick = async () => {
    const randomFetchDrink = await randomFetchApiDrink();
    const id = randomFetchDrink[0].idDrink;
    history.push(`/bebidas/${id}`);
  };

  return (
    <div>
      <Header title="Explorar Bebidas" />
      <main>
        <Link to="/explorar/bebidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ handleClick }
        >
          Me Surpreenda!
        </button>
      </main>
      <Footer />
    </div>
  );
}
