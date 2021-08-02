import React from 'react';
import { Link } from 'react-router-dom';
import drink from '../images/drinkIcon.svg';
import explore from '../images/exploreIcon.svg';
import food from '../images/mealIcon.svg';

export default function Footer() {
  const fixed = { position: 'fixed', bottom: '0px' };
  return (
    <footer style={ fixed } data-testid="footer">
      <Link to="/bebidas">
        <img data-testid="drinks-bottom-btn" src={ drink } alt="drink" />
      </Link>
      <Link to="/explorar">
        <img data-testid="explore-bottom-btn" src={ explore } alt="explore" />
      </Link>
      <Link to="/comidas">
        <img data-testid="food-bottom-btn" src={ food } alt="food" />
      </Link>
    </footer>
  );
}
