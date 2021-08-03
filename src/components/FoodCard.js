import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import GlobalContext from '../context';
import '../styles/Comidas.css';

function FoodCard(props) {
  const { history } = props;
  const { foodArray } = useContext(GlobalContext);

  const eleven = 11;

  function filter() {
    const twelveRecepies = [];
    if (foodArray) {
      foodArray.forEach((meal, index) => {
        if (index <= eleven) {
          twelveRecepies.push(meal);
        }
      });
    }

    if (twelveRecepies.length === 1) {
      const id = foodArray[0].idMeal;
      history.push(`/comidas/${id}`);
    } else if (twelveRecepies.length === 0) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }

    return twelveRecepies;
  }

  const mealsArray = filter();

  function goToRecipeDetails({ target }) {
    const { id } = target;
    history.push(`/comidas/${id}`);
  }

  return (
    <section className="card-list">
      {mealsArray ? mealsArray.map((meal, index) => (
        <div
          className="card"
          data-testid={ `${index}-recipe-card` }
          // id={ meal.idMeal }
          key={ index }
          onClick={ goToRecipeDetails }
          onKeyUp={ goToRecipeDetails }
          role="button"
          tabIndex={ index }
        >
          <img
            alt=""
            data-testid={ `${index}-card-img` }
            // id={ meal.idMeal }
            src={ meal.strMealThumb }
          />
          <span
            data-testid={ `${index}-card-name` }
            // id={ meal.idMeal }
          >
            {meal.strMeal}
          </span>
        </div>
      )) : <span>Loading</span>}
    </section>
  );
}

FoodCard.propTypes = {
  history: PropTypes.instanceOf(PropTypes.array).isRequired,
};

export default withRouter(FoodCard);
