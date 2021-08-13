import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import '../../styles/components/footer.css';

const Footer = () => (
  <footer data-testid="footer">
    <Link
      to="/bebidas"
      className="image-icon"
    >
      <img
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        alt="Drink Icon"
      />
    </Link>
    <Link
      to="/explorar"
      className="image-icon"
    >
      <img
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        alt="Search Icon"
      />
    </Link>
    <Link
      to="/comidas"
      className="image-icon"
    >
      <img
        data-testid="food-bottom-btn"
        src={ mealIcon }
        alt="Food Icon"
      />
    </Link>
  </footer>
);

export default Footer;
