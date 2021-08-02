import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinks() {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [idDrink, setIdDrink] = useState('');

  async function fetchApiSurprise() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const json = await response.json();
    const { drinks } = json;
    const drink = drinks[0];
    setIdDrink(drink.idDrink);
    setShouldRedirect(true);
  }

  return (
    <div>
      <h1>My Explore Drinks Page</h1>
      <Header title="Explorar Bebidas" />

      <Link to="/explorar/bebidas/ingredientes">
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      <br />

      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => fetchApiSurprise() }
      >
        Me Surpreenda!
      </button>

      <span>
        { shouldRedirect ? <Redirect to={ `/bebidas/${idDrink}` } /> : <div /> }
      </span>

      <Footer />
    </div>
  );
}

export default ExploreDrinks;
