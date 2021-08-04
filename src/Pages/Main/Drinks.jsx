import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import HeaderDrinks from '../../Components/headers/HeaderDrinks';
import LowerMenu from '../../Components/footer/LowerMenu';

function Drinks() {
  const { setPage, dataDrinks, limit,
    setIdDrinks, setDetailsDrinks } = useContext(MainContext);

  function thisPage() {
    setPage('drinks');
  }

  useEffect(() => {
    thisPage();
  }, []);

  if (dataDrinks.length === 1) {
    // * ===== Prototipo forma de capturar o id da bebida selecionada ==
    const ReceivedIdDrink = dataDrinks[0].idDrink;
    setIdDrinks(ReceivedIdDrink);
    // JSON.stringify(dataDrinks[0]);
    // window.localStorage.setItem('DetailsDriks', JSON.stringify(person));
    // * ================================================================
    return <Redirect to={ `/bebidas/${dataDrinks[0].idDrink}` } />;
  }

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
        </div>
      )) }
      <LowerMenu />
    </div>
  );
}

export default Drinks;
