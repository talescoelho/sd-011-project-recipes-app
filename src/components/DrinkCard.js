import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../FoodsAndDrinks.css';

class DrinkCard extends Component {
  render() {
    const { drink, index } = this.props;
    return (
      <Card
        style={ { width: '14rem' } }
        data-testid={ `${index}-recipe-card` }
        className="recipes-cards"
      >
        <Link to={ `/bebidas/${drink.idDrink}` }>
          <Card.Img
            className="img-card"
            variant="top"
            height="200px"
            width="200px"
            data-testid={ `${index}-card-img` }
            src={ drink.strDrinkThumb }
            alt="Imagem da bebida pronta"
          />
          <Card.Body>
            <Card.Title
              data-testid={ `${index}-card-name` }
              className="title"
            >
              { drink.strDrink }
            </Card.Title>
          </Card.Body>
        </Link>
      </Card>
    );
  }
}

DrinkCard.propTypes = {
  drink: PropTypes.object,
  index: PropTypes.number,
}.isRequired;

export default DrinkCard;
