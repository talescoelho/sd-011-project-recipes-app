import React from 'react';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';

const Footer = () => {
  return (
    <footer data-testid="footer">
      <input type="image" src={drinkIcon} data-testid="drinks-bottom-btn"></input>
      <input type="image" src={exploreIcon} data-testid="explore-bottom-btn"></input>
      <input type="image" src={mealIcon} data-testid="food-bottom-btn"></input>
    </footer>
  );
}

export default Footer;