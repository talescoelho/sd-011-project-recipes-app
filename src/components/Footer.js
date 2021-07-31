import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';

function Footer() {
  return (
    <footer
      style={ {
        display: 'flex',
        justifyContent: 'space-around',
        bottom: 0,
        position: 'fixed',
        width: '100%',
        backgroundColor: 'grey',
      } }
      data-testid="footer"
    >
      <Link to="/comidas" data-testid="food-bottom-btn">
        <img src={ mealIcon } alt="food icon" />
      </Link>
      <Link to="/explorar" data-testid="explore-bottom-btn">
        <img src={ exploreIcon } alt="explore icon" />
      </Link>
      <Link to="/bebidas" data-testid="drinks-bottom-btn">
        <img src={ drinkIcon } alt="drink icon" />
      </Link>
    </footer>
  );
}

export default Footer;
