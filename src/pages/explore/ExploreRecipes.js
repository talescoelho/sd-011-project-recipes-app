import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';

export default function ExploreRecipes() {
  const [surprise, setSurprise] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);
  const handlerSurprise = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(url);
    const data = await response.json();
    setSurprise(`/comidas/${data.meals[0].idMeal}`);
    setRedirect(true);
  };

  return (
    <div>
      <Header title="Explorar Comidas" />
      <div>
        <Link to="/explorar/comidas/ingredientes">
          <button
            data-testid="explore-by-ingredient"
            type="button"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button
            data-testid="explore-by-area"
            type="button"
          >
            Por Local de Origem
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
