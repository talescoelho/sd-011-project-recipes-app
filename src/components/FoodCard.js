import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../FoodsAndDrinks.css';

class FoodCard extends Component {
  render() {
    const { food, index } = this.props;
    return (
      <Card
        style={ { width: '14rem' } }
        data-testid={ `${index}-recipe-card` }
        className="recipes-cards"
      >
        <Link to={ `/comidas/${food.idMeal}` }>
          <Card.Img
            className="img-card"
            variant="top"
            height="200px"
            width="200px"
            data-testid={ `${index}-card-img` }
            src={ food.strMealThumb }
            alt="Imagem da receita pronta"
          />
          <Card.Body>
            <Card.Title
              data-testid={ `${index}-card-name` }
              className="title"
            >
              { food.strMeal }
            </Card.Title>
          </Card.Body>
        </Link>
      </Card>
    );
  }
}

FoodCard.propTypes = {
  food: PropTypes.object,
  index: PropTypes.number,
}.isRequired;

export default FoodCard;
