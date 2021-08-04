import React from 'react';
import { Link } from 'react-router-dom';
import drink from '../images/drinkIcon.svg';
import food from '../images/mealIcon.svg';
import explore from '../images/exploreIcon.svg';
import '../style/footerMenu.css';

export default function FooterMenu() {
  return (
    <footer data-testid="footer" className="footer">
      <Link to="">
        <img src={ drink } alt="picture drink" />
      </Link>

      <Link to="">
        <img src={ explore } alt="explore" />
      </Link>

      <Link to="">
        <img src={ food } alt="food" />
      </Link>

    </footer>
  );
}

//    {/* <Link */}
//    <img
//    src="src/images/drinkIcon.svg"
//    alt=""
//    // data-testid="drinks-bottom-btn"
//    // type="button"
//    // name="drink"
//    // onClick="Colocar função redirect"
//  />
//  {/* <img
//    src=""
//    alt=""
//    data-testid="explore-bottom-btn"
//    type="button"
//    name="explore"
//    onClick=""
//  />
//  <img
//    src=""
//    alt=""
//    data-testid=""
//    type="button"
//    name="food"
//    onClick="food-bottom-btn"
//  /> */}