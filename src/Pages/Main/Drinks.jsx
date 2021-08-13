import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import HeaderDrinks from '../../Components/headers/HeaderDrinks';
import LowerMenu from '../../Components/footer/LowerMenu';
import '../../css/Drinks.css';
import DrinkCards from '../../Components/cards/DrinkCards';
import FilterButtonsDrink from '../../Components/FilterButtons/FilterButtonsDrink';

function Drinks() {
  const { setPage, dataDrinks,
    setIdDrinks } = useContext(MainContext);

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
    <div className="drink-page">
      <HeaderDrinks />
      <FilterButtonsDrink />
      <DrinkCards />
      <LowerMenu />
    </div>
  );
}

export default Drinks;
