import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <p>Menu inferior</p>

      <Link to="/bebidas">
        <img src={ drinkIcon } alt="drinks page" data-testid="drinks-bottom-btn" />
      </Link>

      <Link to="/explorar">
        <img src={ exploreIcon } alt="explore page" data-testid="explore-bottom-btn" />
      </Link>

      <Link to="/comidas">
        <img src={ mealIcon } alt="foods page" data-testid="food-bottom-btn" />
      </Link>

    </footer>
  );
}

/*

      <Link to="/explorar" data-testid="explore-bottom-btn">
        <img src={ exploreIcon }/>
      </Link>

*/

export default Footer;
