import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../Context/MainContext';
import { getDrinksInitial } from '../../Services/ApiDrink';
import '../../css/Drinks.css';

function DrinkCards() {
  const [initialDrinks, setInitialDrinks] = useState([]);
  const { dataDrinks, limit, inputSearch } = useContext(MainContext);

  async function fetchDrinksInitial() {
    const drinksInitialAPI = await getDrinksInitial();
    setInitialDrinks(drinksInitialAPI.drinks);
  }

  useEffect(() => {
    fetchDrinksInitial();
  }, []);

  if (inputSearch) {
    return (
      <div className="card-drinks">
        { dataDrinks.map((item, index) => index < limit && (
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
        )) }
      </div>
    );
  }
  return (
    <div className="card-drinks">
      { initialDrinks.map((item, index) => index < limit && (
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
      )) }
    </div>
  );
}

export default DrinkCards;
