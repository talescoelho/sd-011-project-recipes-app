import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../FoodsAndDrinks.css';

class DrinkCards extends Component {
  render() {
    const { drinkCardsList } = this.props;
    return (
      <ul>
        { drinkCardsList.map((item, index) => (
          <Card
            style={ { width: '14rem' } }
            key={ item.idDrink }
            data-testid={ `${index}-recipe-card` }
            className="recipes-cards"
          >
            <Link to={ `/bebidas/${item.idDrink}` }>
              <Card.Img
                className="img-card"
                variant="top"
                height="200px"
                width="200px"
                data-testid={ `${index}-card-img` }
                src={ item.strDrinkThumb }
                alt="Imagem da bebida pronta"
              />
              <Card.Body>
                <Card.Title
                  data-testid={ `${index}-card-name` }
                  className="title"
                >
                  { item.strDrink }
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  drinkCardsList: state.drinkReducer.drinkCardsList,
});

DrinkCards.propTypes = {
  drinkCardsList: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(DrinkCards);
