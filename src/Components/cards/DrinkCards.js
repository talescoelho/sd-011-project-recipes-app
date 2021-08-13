import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import { getDrinksInitial } from '../../Services/ApiDrink';
import '../../css/Drinks.css';

function DrinkCards() {
  const [initialDrinks, setInitialDrinks] = useState([]);
  const { dataDrinks, limit, inputSearch, drinksByCategory } = useContext(MainContext);

  async function fetchDrinksInitial() {
    const drinksInitialAPI = await getDrinksInitial();
    setInitialDrinks(drinksInitialAPI.drinks);
  }

  useEffect(() => {
    fetchDrinksInitial();
  }, []);

  console.log(drinksByCategory);

  if (inputSearch) {
    return (
      <div className="card-drinks">
        { dataDrinks.map((item, index) => index < limit && (
          <Link to={ `/bebidas/${item.idDrink}` }>
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ item.strDrinkThumb }
                alt={ `Drink ${item.strDrink}` }
                width="80"
              />
              <p data-testid={ `${index}-card-name` }>
                { item.strDrink }
              </p>
            </div>
          </Link>
        )) }
      </div>
    );
  }

  if (drinksByCategory.length > 0) {
    return (
      <div className="card-drinks">
        { drinksByCategory.map((drink, index) => index < limit && (
          <Link to={ `/bebidas/${drink.idDrink}` }>
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ drink.strDrinkThumb }
                alt={ `Drink ${drink.strDrink}` }
                width="80"
              />
              <p data-testid={ `${index}-card-name` }>
                { drink.strDrink }
              </p>
            </div>
          </Link>
        )) }
      </div>
    );
  }

  return (
    <div className="card-drinks">
      { initialDrinks.map((item, index) => index < limit && (
        <Link to={ `/bebidas/${item.idDrink}` }>
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <img
              data-testid={ `${index}-card-img` }
              src={ item.strDrinkThumb }
              alt={ `Drink ${item.strDrink}` }
              width="80"
            />
            <p data-testid={ `${index}-card-name` }>
              { item.strDrink }
            </p>
          </div>
        </Link>
      )) }
    </div>
  );
}

export default DrinkCards;
