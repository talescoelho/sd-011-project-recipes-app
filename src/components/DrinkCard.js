import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import GlobalContext from '../context';
import '../styles/Comidas.css';

function DrinkCard(props) {
  const { drinkArray } = useContext(GlobalContext);

  const eleven = 11;

  function filter() {
    const twelveRecepies = [];
    drinkArray.forEach((meal, index) => {
      if (index <= eleven) {
        twelveRecepies.push(meal);
      }
    });
    return twelveRecepies;
  }

  const drinksArray = filter();

  function goToRecipeDetails({ target }) {
    const { history } = props;
    const { id } = target;
    history.push(`/bebidas/${id}`);
  }

  return (
    <section className="card-list">
      {drinksArray ? drinksArray.map((drink, index) => (
        <div
          className="card"
          data-testid={ `${index}-recipe-card` }
          id={ drink.idDrink }
          key={ index }
          onClick={ goToRecipeDetails }
          onKeyUp={ goToRecipeDetails }
          role="button"
          tabIndex={ index }
        >
          <img
            alt=""
            data-testid={ `${index}-card-img` }
            id={ drink.idDrink }
            src={ drink.strDrinkThumb }
          />
          <span
            data-testid={ `${index}-card-name` }
            id={ drink.idDrink }
          >
            {drink.strDrink}
          </span>
        </div>
      )) : <span>Loading</span>}
    </section>
  );
}

DrinkCard.propTypes = {
  history: PropTypes.instanceOf(PropTypes.array).isRequired,
};

export default withRouter(DrinkCard);
