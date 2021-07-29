import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <img
        type="image"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        alt="bebidas"
      />
      <img
        type="image"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        alt="explorar"
      />
      <img
        type="image"
        data-testid="food-bottom-btn"
        src={ mealIcon }
        alt="comidas"
      />
    </footer>
  );
}

export default Footer;
