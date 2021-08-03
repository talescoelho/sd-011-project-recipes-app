import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
// import { fetchDefaultFoodsFromMealsDB } from '../services';

export default function ExploreMeals() {
  const [randomMealId] = useState('52771');

  // const getRandomMeal = async () => {
  //   const meals = await fetchDefaultFoodsFromMealsDB();
  //   const randomMealIndex = Math.floor(Math.random() * meals.length);
  //   setRandomMealId(meals[randomMealIndex].idMeal);
  // };

  // useEffect(() => getRandomMeal(), []);

  return (
    <div>
      <Header title="Explorar Comidas" renderButton />
      <Link
        data-testid="explore-by-ingredient"
        to="/explorar/comidas/ingredientes"
      >
        Por Ingredientes
      </Link>
      <Link
        data-testid="explore-by-area"
        to="/explorar/comidas/area"
      >
        Por Local de Origem
      </Link>
      <Link
        data-testid="explore-surprise"
        to={ `/comidas/${randomMealId}` }
      >
        Me Surpreenda!
      </Link>
      <LowerMenu />
    </div>
  );
}
