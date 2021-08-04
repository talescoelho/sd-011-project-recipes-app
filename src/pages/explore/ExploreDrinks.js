import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';

export default function ExploreDrinks() {
  const [surprise, setSurprise] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);
  const handlerSurprise = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(url);
    const data = await response.json();
    setSurprise(`/comidas/${data.drinks[0].idDrink}`);
    setRedirect(true);
  };
  return (
    <div>
      <Header title="Explorar Bebidas" />
      <div>
        <Link to="/explorar/bebidas/ingredientes">
          <button
            data-testid="explore-by-ingredient"
            type="button"
          >
            Por Ingredientes
          </button>
        </Link>
        <button
          data-testid="explore-surprise"
          type="button"
          onClick={ handlerSurprise }
        >
          Me Surpreenda!
        </button>
        {redirect && <Redirect to={ surprise } />}

      </div>
      <Footer />
    </div>
  );
}
