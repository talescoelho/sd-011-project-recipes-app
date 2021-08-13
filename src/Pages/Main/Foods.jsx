import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import HeaderFoods from '../../Components/headers/HeaderFoods';
import LowerMenu from '../../Components/footer/LowerMenu';
import FoodCards from '../../Components/cards/FoodCards';
import FilterButtonsFood from '../../Components/FilterButtons/FilterButtonsFood';
import '../../css/Foods.css';

function Foods() {
  const { dataFoods, setPage,
    setIdFoods } = useContext(MainContext);

  function thisPage() {
    setPage('foods');
  }

  useEffect(() => {
    thisPage();
  }, []);

  if (dataFoods.length === 1) {
    // * ===== Prototipo forma de capturar o id da comida selecionada ==
    const ReceivedIdMeal = dataFoods[0].idMeal;
    setIdFoods(ReceivedIdMeal);
    const details = JSON.stringify(dataFoods[0]);
    window.localStorage.setItem('DetailsFoods', details);
    // * ================================================================
    return <Redirect to={ `/comidas/${dataFoods[0].idMeal}` } />;
  }

  return (
    <div className="food-page">
      <HeaderFoods />
      <FilterButtonsFood />
      <FoodCards />
      <LowerMenu />
    </div>
  );
}

export default Foods;
