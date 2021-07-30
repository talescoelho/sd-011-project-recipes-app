import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './LowerMenu.css';

const LowerMenu = () => (
  <footer data-testid="footer" id="fixed-bar">
    <Link to="/bebidas">
      <img
        src={ drinkIcon }
        alt="Bebidas"
        data-testid="drinks-bottom-btn"
        className="img-btn"
      />
    </Link>
    <Link to="/explorar">
      <img
        src={ exploreIcon }
        alt="Bebidas"
        data-testid="explore-bottom-btn"
        className="img-btn"
      />
    </Link>
    <Link to="/comidas">
      <img
        src={ mealIcon }
        alt="Bebidas"
        data-testid="food-bottom-btn"
        className="img-btn"
      />
    </Link>
  </footer>
);

export default LowerMenu;
