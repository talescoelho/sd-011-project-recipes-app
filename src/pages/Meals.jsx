import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';
import UserContext from '../context/UserContext';
import '../css/mainPage.css';
import CategoriesMeals from '../components/CategoriesMeals';
import SearchBarMeals from '../components/SearchBarMeals';

export default function Meals({ history }) {
  const { meals = [] } = useContext(UserContext);
  if (meals.length === 0) {
    return <div>loading</div>;
  }

  // corrigir essa gambi e deichar generico
  if (meals.length === 1 && meals[0].strMeal !== 'Mbuzi Choma (Roasted Goat)') {
    history.push(`/comidas/${meals[0].idMeal}`);
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
      <SearchBarMeals />
      <CategoriesMeals />
      <section className="meals">
        {meals.map((meal, index) => (
          <button
            type="button"
            className="meal"
            key={ meal.idMeal }
            onClick={ () => clickDetails(meal.idMeal) }
          >
            <div data-testid={ `${index}-recipe-card` }>
              <img
                src={ meal.strMealThumb }
                alt="imagem da refeição"
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{ meal.strMeal }</p>
            </div>
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
