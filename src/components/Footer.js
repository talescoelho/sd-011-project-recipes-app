import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div
        className="footer"
        data-testid="footer"
      >
        <Link
          to="/bebidas"
          data-testid="drinks-bottom-btn"
        >
          <img
            src={ drinkIcon }
            alt="Atalho para Bebidas"
          />
        </Link>
        <Link
          to="/explorar"
          data-testid="explore-bottom-btn"
        >
          <img
            src={ exploreIcon }
            alt="Atalho para Explorar"
          />
        </Link>
        <Link
          to="/comidas"
          data-testid="food-bottom-btn"
        >
          <img
            src={ mealIcon }
            alt="Atalho para Comidas"
          />
        </Link>
      </div>
    );
  }
}

export default Footer;
