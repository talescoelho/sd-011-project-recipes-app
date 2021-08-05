import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import HeaderDrinks from '../../Components/headers/HeaderDrinks';
import LowerMenu from '../../Components/footer/LowerMenu';
import '../../css/Drinks.css';
import DrinkCards from '../../Components/cards/DrinkCards';
import FilterButtonsDrink from '../../Components/FilterButtons/FilterButtonsDrink';

function Drinks() {
  const { setPage, dataDrinks } = useContext(MainContext);

  function thisPage() {
    setPage('drinks');
  }

  useEffect(() => {
    thisPage();
  }, []);

  if (dataDrinks.length === 1) {
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
