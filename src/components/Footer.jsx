import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer" style={ { position: 'fixed', bottom: 0 } }>
      <button
        type="button"
      >
        <img
          src={ drinkIcon }
          alt="Imagem do ícone de acesso às bebidas"
          data-testid="drinks-bottom-btn"
        />
      </button>
      <button
        type="button"
      >
        <img
          src={ exploreIcon }
          alt="Imagem do ícone de acesso aos conteúdos do app"
          data-testid="explore-bottom-btn"
        />
      </button>
      <button
        type="button"
      >
        <img
          src={ mealIcon }
          alt="Imagem do ícone de acesso às comidas"
          data-testid="food-bottom-btn"
        />
      </button>
    </footer>
  );
}

export default Footer;
