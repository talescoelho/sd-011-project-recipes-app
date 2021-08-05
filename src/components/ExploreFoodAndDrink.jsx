import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Header from './Header';

export default function ExploreFoodAndDrink() {
  const location = useLocation().pathname;
  const history = useHistory();

  function getRamdonRoute() {
    const URL_MEAL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const URL_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const path = `/${location.split('/')[2]}`;
    if (path === '/comidas') {
      fetch(URL_MEAL)
        .then((response) => response.json())
        .then((data) => history.push(`${path}/${data.meals[0].idMeal}`));
    } else if (path === '/bebidas') {
      fetch(URL_DRINK)
        .then((response) => response.json())
        .then((data) => history.push(`${path}/${data.drinks[0].idDrink}`));
    }
  }
  return (
    <>
      <Header />
      <button
        type="button"
        onClick={ () => history.push(`${location}/ingredientes`) }
        data-testid="explore-by-ingredient"
      >
        Por Ingredientes
      </button>
      {
        location === '/explorar/comidas'
        && (
          <button
            type="button"
            onClick={ () => history.push(`${location}/area`) }
            data-testid="explore-by-area"
          >
            Por Local de Origem
          </button>
        )
      }
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => getRamdonRoute() }
      >
        Me Surpreenda!
      </button>
    </>
  );
}
