import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import meailIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer data-testid="footer">
      <div className="footer-imgs">
        <Link to="/bebidas">
          <img
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
            alt="drinkIcon"
          />

        </Link>

        <Link to="/explorar">
          <img
            data-testid="explore-bottom-btn"
            src={ exploreIcon }
            alt="exploreIcon"
          />
        </Link>
        <Link to="/comidas">
          <img
            data-testid="food-bottom-btn"
            src={ meailIcon }
            alt="meailIcon"
          />

        </Link>
      </div>
    </footer>
  );
}
