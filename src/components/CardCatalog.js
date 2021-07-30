import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import './css/CardCatalog.css';

function CardCatalog() {
  const { catalog } = useContext(GlobalContext);
  const supplyIdentity = Object.keys(catalog)[0];

  const maxCardsOnPage = 12;
  const catalogLimited = catalog[supplyIdentity].slice(0, maxCardsOnPage);

  // strMeal: "Creamy Tomato Soup"
  // strMealThumb: "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg"

  function renderMealsCards() {
    return catalogLimited.map((food, index) => (
      <div data-testid={ `${index}-recipe-card` } key={ index } className="supply-card">
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
        <Link
          to={ `/comidas/${food.idMeal}` }
        >
          Receita
        </Link>
      </div>
    ));
  }

  function renderDrinksCards() {
    return catalogLimited.map((drink, index) => (
      <div data-testid={ `${index}-recipe-card` } key={ index } className="supply-card">
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
        <Link to={ `/bebidas/${drink.idDrink}` }>
          Receita
        </Link>
      </div>
    ));
  }

  return (
    <div>
      {supplyIdentity === 'meals' ? renderMealsCards() : renderDrinksCards()}
    </div>
  );
}

export default CardCatalog;
