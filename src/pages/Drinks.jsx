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
    history.push(`/comidas/${drinks[0].idDrink}`);
  }

  const bebidas = 'Bebidas';

  return (
    <>
      <Header title={ bebidas } />
      <SearchBarDrinks />
      <CategoriesDrinks />
      <section className="drinks">
        {drinks.map((drink) => (
          <div className="drink" key={ drink.idDrink }>
            <img src={ drink.strDrinkThumb } alt="imagem da bebida" />
            <p>{ drink.strDrink }</p>
          </div>
        ))}
      </section>
      <FooterMenu />
    </>
  );
}

Drinks.propTypes = {
  history: PropTypes.node.isRequired,
};
