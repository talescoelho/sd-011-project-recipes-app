import React, { useContext } from 'react';
import GlobalContext from '../context';
import '../styles/Comidas.css';

export default function FoodCard() {
  const { foodArray } = useContext(GlobalContext);

  const eleven = 11;

  function filter() {
    const twelveRecepies = [];
    foodArray.forEach((meal, index) => {
      if (index <= eleven) {
        twelveRecepies.push(meal);
      }
    });
    return twelveRecepies;
  }

  const mealsArray = filter();

  return (
    <section className="card-list">
      {mealsArray ? mealsArray.map((meal, index) => (
        <div data-testid={ `${index}-recipe-card` } className="card" key={ index }>
          <img data-testid={ `${index}-card-img` } src={ meal.strMealThumb } alt="" />
          <span data-testid={ `${index}-card-name` }>{meal.strMeal}</span>
        </div>
      )) : <span>Loading</span>}
    </section>
  );
}
