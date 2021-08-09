import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';
import UserContext from '../context/UserContext';
import '../css/mainPage.css';
import CategoriesMeals from '../components/CategoriesMeals';

export default function Meals({ history }) {
  const { meals } = useContext(UserContext);
  if (meals.length === 0) {
    return <div>loading</div>;
  }

  // A função faz uma nova requisição com um ID específico.
  // Em seguida passa as infos para o provider;
  // Redireciona pra page de details;

  function clickDetails(id) {
    history.push(`/comidas/${id}`);
  }

  const comidas = 'Comidas';

  return (
    <>
      <Header title={ comidas } />
      <CategoriesMeals />
      <section className="meals">
        {meals.map((meal) => (
          <button
            type="button"
            className="meal"
            key={ meal.idMeal }
            onClick={ () => clickDetails(meal.idMeal) }
          >
            <img src={ meal.strMealThumb } alt="imagem da refeição" />
            <p>{meal.strMeal}</p>
          </button>
        ))}
      </section>
      <FooterMenu />
    </>
  );
}

Meals.propTypes = {
  history: PropTypes.node.isRequired,
};
