import React from 'react';
import { Link } from 'react-router-dom';
import drink from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/MenuInferior.css';

export default function MenuInferior() {
  return (
    <div className="menu-bottom">
      <footer className="menu-bottom-imagens" data-testid="footer">
        <Link to="/bebidas" data-testid="drinks-bottom-btn">
          <img src={ drink } alt="Drink Icon" />
        </Link>
        <Link to="/explorar" data-testid="explore-bottom-btn">
          <img src={ exploreIcon } alt="Drink Icon" />
        </Link>
        <Link to="/comidas" data-testid="food-bottom-btn">
          <img src={ mealIcon } alt="Drink Icon" />
        </Link>
      </footer>
    </div>
  );
}
