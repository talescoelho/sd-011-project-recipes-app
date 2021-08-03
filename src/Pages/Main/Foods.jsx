import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import HeaderFoods from '../../Components/headers/HeaderFoods';
import LowerMenu from '../../Components/footer/LowerMenu';
import FoodCards from '../../Components/cards/FoodCards';
import '../../css/Foods.css';

function Foods() {
  const { dataFoods, setPage } = useContext(MainContext);

  function thisPage() {
    setPage('foods');
  }

  useEffect(() => {
    thisPage();
  }, []);

  if (dataFoods.length === 1) {
    return <Redirect to={ `/comidas/${dataFoods[0].idMeal}` } />;
  }

  return (
    <div className="food-page">
      <HeaderFoods />
      <FoodCards />
      <LowerMenu />
    </div>
  );
}

export default Foods;
