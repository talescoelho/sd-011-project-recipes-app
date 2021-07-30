import React, { useContext } from 'react';
import GlobalContext from '../context';
import '../styles/Comidas.css';

export default function DrinkCard() {
  const { drinkArray } = useContext(GlobalContext);

  const eleven = 11;

  function filter() {
    const twelveRecepies = [];
    drinkArray.forEach((meal, index) => {
      if (index <= eleven) {
        twelveRecepies.push(meal);
      }
    });
    return twelveRecepies;
  }

  const drinksArray = filter();

  return (
    <section className="card-list">
      {drinksArray ? drinksArray.map((meal, index) => (
        <div data-testid={ `${index}-recipe-card` } className="card" key={ index }>
          <img data-testid={ `${index}-card-img` } src={ meal.strMealThumb } alt="" />
          <span data-testid={ `${index}-card-name` }>{meal.strMeal}</span>
        </div>
      )) : <span>Loading</span>}
    </section>
  );
}
