import React, { useContext } from 'react';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';
import UserContext from '../context/UserContext';
import '../css/mainPage.css';

export default function Meals() {
  const { meals } = useContext(UserContext);
  if (meals.length === 0) {
    return <div>loading</div>;
  }

  const comidas = 'Comidas';

  return (
    <>
      <Header title={ comidas } />
      <section className="meals">
        {meals.map((meal) => (
          <div className="meal" key={ meal.idMeal }>
            <img src={ meal.strMealThumb } alt="imagem da refeição" />
            <p>{ meal.strMeal }</p>
          </div>
        ))}
      </section>
      <FooterMenu />
    </>
  );
}
