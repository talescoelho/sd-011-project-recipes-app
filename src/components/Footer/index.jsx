import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './styles.css';

const Footer = () => (
  <footer
    className="d-flex justify-content-between bg-light p-2 fixed-bottom"
    data-testid="footer"
  >
    <Link className="footer-link" to="/bebidas">
      <img
        src={ drinkIcon }
        alt="Redireciona para a página de drinks"
        data-testid="drinks-bottom-btn"
      />
    </Link>
    <Link className="footer-link" to="/explorar">
      <img
        src={ exploreIcon }
        alt="Redireciona para a página explorar"
        data-testid="explore-bottom-btn"
      />
    </Link>
    <Link className="footer-link" to="/comidas">
      <img
        src={ mealIcon }
        alt="Redireciona para a página de comidas"
        data-testid="food-bottom-btn"
      />
    </Link>
  </footer>
);

export default Footer;
