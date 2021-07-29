import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => (
  <footer data-testid="footer" className="footer">
    <Link data-testid="drinks-bottom-btn" to="/bebidas">
      <img src={ drinkIcon } alt="drink icon" />
    </Link>
    <Link data-testid="explore-bottom-btn" to="/explorar">
      <img src={ exploreIcon } alt="explore icon" />
    </Link>
    <Link data-testid="food-bottom-btn" to="/comidas">
      <img src={ mealIcon } alt="meal icon" />
    </Link>
  </footer>
);

export default Footer;
