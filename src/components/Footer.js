import React, { Component } from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer
        className="footer"
        data-testid="footer"
      >
        <button
          type="button"
        >
          <img
            src={ drinkIcon }
            alt="Link para bebidas"
            data-testid="drinks-bottom-btn"
          />
        </button>
        <button
          type="button"
        >
          <img
            src={ exploreIcon }
            alt="Link para bebidas"
            data-testid="explore-bottom-btn"
          />
        </button>
        <button
          type="button"
        >
          <img
            src={ mealIcon }
            alt="Link para bebidas"
            data-testid="food-bottom-btn"
          />
        </button>
      </footer>
    );
  }
}

export default Footer;
