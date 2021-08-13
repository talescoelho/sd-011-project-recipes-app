import React from 'react';
import PropTypes from 'prop-types';
import { getXFirstElementsFromArray } from '../helpers/utils';
import '../index.css';

class RecipesRecommended extends React.Component {
  constructor({ recipesRecommended }) {
    super({ recipesRecommended });

    this.state = {
      slideIndex: 0,
      // twoRecommended: getXFirstElementsFromArray(recipesRecommended, QUANTITY),
    };

    // this.plusSlides = this.plusSlides.bind(this);
    // this.showSlides = this.showSlides.bind(this);
    // this.handleChangeCard = this.handleChangeCard.bind(this);
    // this.fillRecommendedStyles = this.fillRecommendedStyles.bind(this);
    // this.fillTwoRecommendeds = this.fillTwoRecommendeds.bind(this);
  }

  componentDidMount() {
    const { recipesRecommended } = this.props;
    console.log('valor de recipesRecommended em didUpdate');
    console.log(recipesRecommended);
  }

  componentDidUpdate() {
    const { slideIndex } = this.state;
    console.log('slideIndex em didUpdate');
    console.log(slideIndex);
  }


  showSlides(n) {
    const DECREMENT = -1;
    const INCREMENT = 1;
    const INDEX = 5;

    // const { recipesRecommended } = this.props;
    const { slideIndex } = this.state;

    if (n === DECREMENT) {
      if (slideIndex === 0) {
        this.setState(() => ({
          slideIndex: 5,
        }));
      } else {
        this.setState((prev) => ({
          slideIndex: prev.slideIndex - 1,
        }));
      }
    }
    if (n === INCREMENT) {
      if (slideIndex === INDEX) {
        this.setState(() => ({
          slideIndex: 0,
        }));
      } else {
        this.setState((prev) => ({
          slideIndex: prev.slideIndex + n,
        }));
      }
    }
  }

  render() {
    const { recipesRecommended } = this.props;
    const { slideIndex } = this.state;

    const DECREMENT = -1;
    const INCREMENT = 1;
    const QUANTITY = 6;

    // this.fillRecommendedStyles();

    return (
      <div className="container">
        <h3> Recomendadas </h3>
        <div className="slideshow-container" ref={ this.slides }>
          <br />
          {getXFirstElementsFromArray(recipesRecommended, QUANTITY).map((item, index) => {
            return (
              <div
                data-testid={ `${index}-recomendation-card` }
                className="card"
                // ref={ this.slides }
                key={ index }
                hidden={ !(index === slideIndex || index === slideIndex + 1) }
                onChange={ ({ target }) => this.handleChangeCard({ target }) }
              >
                <div className="numbertext">
                  {`${index + 1} / 6`}
                </div>
                <img
                  src={ item.strMealThumb || item.strDrinkThumb }
                  style={ { width: '100%' } }
                  alt="Recomendadação"
                />
                <div data-testid={ `${index}-recomendation-title` } className="text">{ item.strMeal || item.strDrink }</div>
              </div>
            );
          }) }
        </div>
        <br />
        <button
          className="prev"
          type="button"
          aria-label="botões de transição"
          onClick={ () => this.showSlides(DECREMENT) }
          onKeyDown={ () => this.showSlides(DECREMENT) }
        >
          &#10094;
        </button>
        <button
          className="next"
          type="button"
          aria-label="botões de transição"
          onClick={ () => this.showSlides(INCREMENT) }
          onKeyDown={ () => this.showSlides(INCREMENT) }
        >
          &#10095;
        </button>
      </div>
    );
  }
}

export default RecipesRecommended;

RecipesRecommended.propTypes = {
  recipesRecommended: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
