import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import randomFetchApiFood from '../../../services/randomFetchApiFood';

export default function ExplorarComidas() {
  const history = useHistory();
  const handleClick = async () => {
    const randomFetchFood = await randomFetchApiFood();
    const id = randomFetchFood[0].idMeal;
    history.push(`/comidas/${id}`);
  };

  return (
    <div>
      <Header title="Explorar Comidas" />
      <main>
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
