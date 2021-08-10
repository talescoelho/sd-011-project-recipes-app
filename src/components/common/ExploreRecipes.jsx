import React, { useState, useEffect } from 'react';
import '../../styles/pages/search.css';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

const ExploreRecipes = ({ page }) => {
  const [surpriseMeal, setSurpriseMeal] = useState('');
  const [surpriseDrink, setSurpriseDrink] = useState('');

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then(({ meals }) => setSurpriseMeal(meals[0].idMeal));

    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then(({ drinks }) => setSurpriseDrink(drinks[0].idDrink));
  }, []);

  return (
    <nav className="explore-recipes">
      <Link data-testid="explore-by-ingredient" to={ `/explorar/${page}/ingredientes` }>
        Por Ingredientes
      </Link>
      {
        (page === 'comidas')
          ? (
            <Link data-testid="explore-by-area" to="/explorar/comidas/area">
              Por Local de Origem
            </Link>
          )
          : null
      }
      <Link
        data-testid="explore-surprise"
        to={
          (page === 'comidas')
            ? `/comidas/${surpriseMeal}`
            : `/bebidas/${surpriseDrink}`
        }
      >
        Me Surpreenda!
      </Link>
    </nav>
  );
};

ExploreRecipes.propTypes = {
  page: string,
}.isRequired;

export default ExploreRecipes;
