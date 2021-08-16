import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreFoods() {
  const [id, setId] = React.useState(null);
  function aleatoryMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => setId(data.meals[0].idMeal))
      .catch((error) => error.message);
  }

  React.useEffect(() => {
    aleatoryMeal();
  }, []);

  if (!id) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header title="Explorar Comidas" searchIcon />
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
      <Link to={ `/comidas/${id}` }>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </Link>
      <Footer />
    </div>
  );
}
