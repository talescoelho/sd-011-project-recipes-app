import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreDrinks() {
  const [id, setId] = React.useState(null);
  function aleatoryDrink() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => setId(data.drinks[0].idDrink))
      .catch((error) => error.message);
  }

  React.useEffect(() => {
    aleatoryDrink();
  }, []);

  if (!id) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header title="Explorar Bebidas" searchIcon />
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to={ `/bebidas/${id}` }>
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
