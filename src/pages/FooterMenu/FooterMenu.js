import React from 'react';
import { Link } from 'react-router-dom';
import cooktail from '../../images/drinkIcon.svg';
import explore from '../../images/exploreIcon.svg';
import meal from '../../images/mealIcon.svg';
import './styles.css';

const FooterMenu = () => (
  <footer data-testid="footer">
    <Link to="/bebidas">
      <img src={ cooktail } alt="" data-testid="drinks-bottom-btn" />
    </Link>
    <Link to="/explorar">
      <img src={ explore } alt="" data-testid="explore-bottom-btn" />
    </Link>
    <Link to="/comidas">
      <img src={ meal } alt="" data-testid="food-bottom-btn" />
    </Link>
  </footer>
);

export default FooterMenu;
