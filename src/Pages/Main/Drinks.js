import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import HeaderDrinks from '../../Components/headers/HeaderDrinks';
import LowerMenu from '../../Components/LowerMenu';

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
      <HeaderDrinks />
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
          <footer>
            <LowerMenu />
          </footer>
        </div>
      )) }
    </div>
  );
}

export default Drinks;
