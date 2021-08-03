import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
// import { fetchDefaultDrinksFromCocktailsDB } from '../services';

export default function ExploreDrinks() {
  const [randomDrinkId] = useState('178319');

  // const getRandomDrink = async () => {
  //   const drinks = await fetchDefaultDrinksFromCocktailsDB();
  //   console.log(drinks);
  //   const randomDrinkIndex = Math.floor(Math.random() * drinks.length);
  //   setRandomDrinkId(drinks[randomDrinkIndex].idDrink);
  // };

  // useEffect(() => getRandomDrink(), []);

  return (
    <div>
      <Header title="Explorar Bebidas" renderButton />
      <Link
        data-testid="explore-by-ingredient"
        to="/explorar/bebidas/ingredientes"
      >
        Por Ingredientes
      </Link>
      <Link
        data-testid="explore-surprise"
        to={ `/bebidas/${randomDrinkId}` }
      >
        Me Surpreenda!
      </Link>
      <LowerMenu />
    </div>
  );
}
