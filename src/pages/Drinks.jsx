import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';
import UserContext from '../context/UserContext';
import '../css/mainPage.css';
import CategoriesDrinks from '../components/CategoriesDrinks';
import SearchBarDrinks from '../components/SearchBarDrinks';

export default function Drinks({ history }) {
  const { drinks } = useContext(UserContext);
  if (drinks.length === 0) {
    return <div>loading</div>;
  }

  if (drinks.length === 1) {
    history.push(`/bebidas/${drinks[0].idDrink}`);
  }

  function clickDetails(id) {
    history.push(`/bebidas/${id}`);
  }
  const bebidas = 'Bebidas';

  return (
    <>
      <Header title={ bebidas } />
      <SearchBarDrinks />
      <CategoriesDrinks />
      <section className="drinks">
        {drinks.map((drink, index) => (
          <button
            type="button"
            className="drink"
            key={ drink.idDrink }
            onClick={ () => clickDetails(drink.idDrink) }
          >
            <div data-testid={ `${index}-recipe-card` }>
              <img
                src={ drink.strDrinkThumb }
                alt="imagem da bebida"
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
            </div>
          </button>
        ))}
      </section>
      <FooterMenu />
    </>
  );
}

Drinks.propTypes = {
  history: PropTypes.node.isRequired,
};
