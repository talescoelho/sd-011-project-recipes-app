import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
<<<<<<< HEAD
=======
import './Footer.css';
>>>>>>> 530c023ed58d591217c2807363c0ad2394510ad4

function Footer() {
  return (
    <footer data-testid="footer" title="footer">
      <Link to="/bebidas">
        <img src={ drinkIcon } alt="drinks" data-testid="drinks-bottom-btn" />
      </Link>
      <Link to="/explorar">
        <img src={ exploreIcon } alt="explore" data-testid="explore-bottom-btn" />
      </Link>
      <Link to="/comidas">
        <img src={ mealIcon } alt="food" data-testid="food-bottom-btn" />
      </Link>
    </footer>
  );
}

export default Footer;
