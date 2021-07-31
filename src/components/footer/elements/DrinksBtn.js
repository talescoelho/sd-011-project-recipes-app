import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../../images/drinkIcon.svg';

export default function DrinksBtn() {
  return (
    <div>
      <Link to="/bebidas" data-testid="drinks-bottom-btn">
        <img src={ drinkIcon } alt="Símbolo bebida" />
      </Link>
    </div>
  );
}
