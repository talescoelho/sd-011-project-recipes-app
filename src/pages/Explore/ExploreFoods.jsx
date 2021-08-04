import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function ExploreFoods({ match }) {
  const [randomMeal, setRandomMeal] = useState([]);

  useEffect(() => {
    const fetchRandomMeal = () => {
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((response) => response.json())
        .then((meal) => setRandomMeal(meal.meals[0]));
    };
    fetchRandomMeal();
  }, []);

  console.log(randomMeal);
  return (
    <>
      <Header title="Explorar Comidas" match={ match } />
      <div>
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
        <Link to={ `/comidas/${randomMeal.idMeal}` }>
          <button
            type="button"
            data-testid="explore-surprise"
          >
            Me Surpreenda!
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

ExploreFoods.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ExploreFoods;
