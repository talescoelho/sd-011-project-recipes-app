import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import './css/CardCatalog.css';

function CardCatalog() {
  const { catalog } = useContext(GlobalContext);

  const supplyIdentity = Object.keys(catalog)[0];

  const maxCardsOnPage = 12;
  const catalogLimited = catalog[supplyIdentity].slice(0, maxCardsOnPage);

  function renderMealsCards() {
    return catalogLimited.map((food, index) => (
      <Link
        key={ index }
        to={ {
          pathname: `/comidas/${food.idMeal}`,
          state: { foodInfo: food },
        } }
      >
        <div data-testid={ `${index}-recipe-card` } className="supply-card">
          <img
            className="supply-card"
            src={ food.strMealThumb }
            alt={ food.strMeal }
            data-testid={ `${index}-card-img` }
          />
          <div
            data-testid={ `${index}-card-name` }
          >
            <h1>{food.strMeal}</h1>
          </div>
        </div>
      </Link>
    ));
  }

  function renderDrinksCards() {
    return catalogLimited.map((drink, index) => (
      <Link
        key={ index }
        to={ `/bebidas/${drink.idDrink}` }
      >
        <div data-testid={ `${index}-recipe-card` } className="supply-card">
          <img
            className="supply-card"
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
            data-testid={ `${index}-card-img` }
          />
          <div
            data-testid={ `${index}-card-name` }
          >
            <h1>{drink.strDrink}</h1>
          </div>
        </div>
      </Link>
    ));
  }

  return (
    <div>
      {supplyIdentity === 'meals' ? renderMealsCards() : renderDrinksCards()}
    </div>
  );
}

export default CardCatalog;
