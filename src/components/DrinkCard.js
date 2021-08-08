import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class DrinkCard extends Component {
  render() {
    const { drink, index } = this.props;
    return (
      <li data-testid={ `${index}-recipe-card` }>
        <Link to={ `/bebidas/${drink.idDrink}` }>
          <img
            height="200px"
            width="200px"
            data-testid={ `${index}-card-img` }
            src={ drink.strDrinkThumb }
            alt="Imagem da bebida pronta"
          />
          <h3 data-testid={ `${index}-card-name` }>{ drink.strDrink }</h3>
        </Link>
      </li>
    );
  }
}

DrinkCard.propTypes = {
  drink: PropTypes.object,
  index: PropTypes.number,
}.isRequired;

export default DrinkCard;
