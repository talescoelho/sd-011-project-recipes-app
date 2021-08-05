import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class FoodCard extends Component {
  render() {
    const { food, index } = this.props;
    return (
      <li data-testid={ `${index}-recipe-card` }>
        <Link to={ `/comidas/${food.idMeal}` }>
          <img
            height="200px"
            width="200px"
            data-testid={ `${index}-card-img` }
            src={ food.strMealThumb }
            alt="Imagem da receita pronta"
          />
          <h3 data-testid={ `${index}-card-name` }>{ food.strMeal }</h3>
        </Link>
      </li>
    );
  }
}

FoodCard.propTypes = {
  food: PropTypes.object,
  index: PropTypes.number,
}.isRequired;

export default FoodCard;
