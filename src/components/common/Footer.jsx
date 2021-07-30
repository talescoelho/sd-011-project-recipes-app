import React from 'react';
import { Redirect } from 'react-router';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';

const Footer = () => {
  return (
    <footer data-testid="footer">
      <input type="image" src={drinkIcon} placeholder="Drink Icon" onClick={ <Redirect to="/bebidas"/> } data-testid="drinks-bottom-btn"></input>
      <input type="image" src={exploreIcon} placeholder="Search Icon" onClick={ <Redirect to="/explorar"/> } data-testid="explore-bottom-btn"></input>
      <input type="image" src={mealIcon} placeholder="Food Icon" onClick={ <Redirect to="/comidas"/> } data-testid="food-bottom-btn"></input>
    </footer>
  );
}

export default Footer;