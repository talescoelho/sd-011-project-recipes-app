import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import { FooterBar } from '../styles';

export default function Footer({ drink }) {
  return (
    <FooterBar
      data-testid="footer"
      drink={ drink }
    >
      <Link to="/bebidas">
        <img
          src={ drinkIcon }
          alt="Redireciona para tela de bebidas"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/explorar">
        <img
          src={ exploreIcon }
          alt="Redireciona para tela de explorar"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link to="/comidas">
        <img
          src={ mealIcon }
          alt="Redireciona para tela de comidas"
          data-testid="food-bottom-btn"
        />
      </Link>
    </FooterBar>
  );
}

Footer.propTypes = {
  drink: PropTypes.bool,
};

Footer.defaultProps = {
  drink: false,
};
