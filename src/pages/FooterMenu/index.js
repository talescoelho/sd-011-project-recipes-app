import React from 'react';
import { Link } from 'react-router-dom';
import cooktail from '../../images/drinkIcon.svg';
import explore from '../../images/exploreIcon.svg';
import meal from '../../images/mealIcon.svg';
import './styles.css';

const FooterMenu = () => (
  <footer data-testid="footer">
    <Link to="/bebidas">
      <img
        src={ cooktail }
        alt="menu icon cooktail"
        data-testid="drinks-bottom-btn"
      />
    </Link>
    <Link to="/explorar">
      <img
        src={ explore }
        alt="menu icon explore"
        data-testid="explore-bottom-btn"
      />
    </Link>
    <Link to="/comidas">
      <img
        src={ meal }
        alt="menu icon meal "
        data-testid="food-bottom-btn"
      />
    </Link>
  </footer>
);

export default FooterMenu;
