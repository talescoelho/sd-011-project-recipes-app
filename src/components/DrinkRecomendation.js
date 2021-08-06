import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';

class DrinkRecomendation extends Component {
  render() {
    const { drinkRecomendations } = this.props;
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            data-testid="0-recomendation-card"
            src={ drinkRecomendations.length && drinkRecomendations[0].strDrinkThumb }
            alt="First slide"
          />
          <h3 data-testid="0-recomendation-title">
            {drinkRecomendations.length && drinkRecomendations[0].strDrink}
          </h3>
          <img
            className="d-block w-100"
            data-testid="1-recomendation-card"
            src={ drinkRecomendations.length && drinkRecomendations[1].strDrinkThumb }
            alt="First slide"
          />
          <h3 data-testid="1-recomendation-title">
            {drinkRecomendations.length && drinkRecomendations[1].strDrink}
          </h3>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            data-testid="2-recomendation-card"
            src={ drinkRecomendations.length && drinkRecomendations[2].strDrinkThumb }
            alt="First slide"
          />
          <h3 data-testid="2-recomendation-title">
            {drinkRecomendations.length && drinkRecomendations[2].strDrink}
          </h3>
          <img
            className="d-block w-100"
            data-testid="3-recomendation-card"
            src={ drinkRecomendations.length && drinkRecomendations[3].strDrinkThumb }
            alt="First slide"
          />
          <h3 data-testid="3-recomendation-title">
            {drinkRecomendations.length && drinkRecomendations[3].strDrink}
          </h3>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            data-testid="4-recomendation-card"
            src={ drinkRecomendations.length && drinkRecomendations[4].strDrinkThumb }
            alt="First slide"
          />
          <h3 data-testid="4-recomendation-title">
            {drinkRecomendations.length && drinkRecomendations[4].strDrink}
          </h3>
          <img
            className="d-block w-100"
            data-testid="5-recomendation-card"
            src={ drinkRecomendations.length && drinkRecomendations[5].strDrinkThumb }
            alt="First slide"
          />
          <h3 data-testid="5-recomendation-title">
            {drinkRecomendations.length && drinkRecomendations[5].strDrink}
          </h3>
        </Carousel.Item>
      </Carousel>
    );
  }
}

const mapStateToProps = (state) => ({
  drinkRecomendations: state.foodReducer.drinkRecomendations,
});

DrinkRecomendation.propTypes = {
  drinkRecomendations: PropTypes.arrayOf(object),
}.isRequired;

export default connect(mapStateToProps)(DrinkRecomendation);
