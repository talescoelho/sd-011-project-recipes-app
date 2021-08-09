import React, { useContext } from 'react';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';
import UserContext from '../context/UserContext';
import '../css/mainPage.css';
import CategoriesDrinks from '../components/CategoriesDrinks';

export default function Drinks() {
  const { drinks } = useContext(UserContext);
  if (drinks.length === 0) {
    return <div>loading</div>;
  }

  const bebidas = 'Bebidas';

  return (
    <>
      <Header title={ bebidas } />
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
