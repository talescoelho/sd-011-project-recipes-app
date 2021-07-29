import React from 'react';
import cooktail from '../images/drinkIcon.svg';
import explore from '../images/exploreIcon.svg';
import meal from '../images/mealIcon.svg';

const FooterMenu = () => {
  return (
    <footer data-testid="footer">
      Sou um footer
      <img src={ cooktail } alt="" data-testid="drinks-bottom-btn" />
      <img src={ explore } alt="" data-testid="explore-bottom-btn" />
      <img src={ meal } alt="" data-testid="food-bottom-btn" />
    </footer>
  );
};

export default FooterMenu;
