import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../../../images/mealIcon.svg';

export default function FoodBtn() {
  return (
    <div>
      <Link to="comidas" data-testeid="food-bottom-btn">
        <img src={ mealIcon } alt="Símbolo comida" />
      </Link>
    </div>
  );
}
