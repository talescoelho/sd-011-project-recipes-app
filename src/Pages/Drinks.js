import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';
import MainContext from '../Context/MainContext';

function Drinks() {
  const { setPage, dataDrinks, limit } = useContext(MainContext);

  function thisPage() {
    setPage('drinks');
  }

  useEffect(() => {
    thisPage();
  }, []);

  if (dataDrinks.length === 1) {
    return <Redirect to={ `/bebidas/${dataDrinks[0].idDrink}` } />;
  }

  console.log(dataDrinks);
  return (
    <div>
      <header>
        <button type="button" data-testid="search-top-btn">passa</button>
      </header>
      <SearchBar />
      { dataDrinks.map((item, index) => index < limit && (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            src={ item.strDrinkThumb }
            alt={ `Drink ${item.strDrink}` }
            width="200"
          />
          <p data-testid={ `${index}-card-name` }>
            { item.strDrink }
          </p>
        </div>
      )) }
    </div>
  );
}

export default Drinks;
