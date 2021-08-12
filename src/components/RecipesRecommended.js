import React from 'react';
import PropTypes from 'prop-types';

class RecipesRecommended extends React.Component {
  constructor() {
    super();

    this.state = {
      slideIndex: 0,
    };

    this.plusSlides = this.plusSlides.bind(this);
    this.showSlides = this.showSlides.bind(this);
    this.currentSlide = this.currentSlide.bind(this);
    // this.fillRecommendedStyles = this.fillRecommendedStyles.bind(this);
  }

  // componentDidMount() {
  //   const { slideIndex } = this.state;

  //   this.fillRecommendedStyles();
  //   this.showSlides(slideIndex); // Aqui
  // }

  componentDidUpdate() {
    const { recommendedStylesSlide, slideIndex } = this.state;

    console.log('recommendedStylesSlide em did update');
    console.log(recommendedStylesSlide);

    console.log('valor de slideIndex em didUpdate');
    console.log(slideIndex);
  }

  // /// ABAIXO  lógica das recomendações

  // Next/previous controls
  plusSlides(n) {
    const { slideIndex } = this.state;
    this.showSlides(slideIndex + n);
    this.setState((prev) => ({
      slideIndex: prev.slideIndex + n,
    }));
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.setState((prev) => ({
      slideIndex: prev + n,
    }));
    this.showSlides(n);
  }
  // const slides = document.getElementsByClassName('mySlides');
  // const dots = document.getElementsByClassName('dot');

  // slides[decr].style.display = 'block';
  // dots[decr].className += 'active';

  showSlides(n) {
    // const TESTE = 24;
    const { recipesRecommended } = this.props;

    if (n > recipesRecommended.length) {
      this.setState({ slideIndex: 0 });
      console.log('Entrou no primeiro if');
    }
    if (n < 0) {
      this.setState({ slideIndex: recipesRecommended.length });
    }
  }

  /// ACIMA lógica das recomendações

  render() {
    const { recipesRecommended } = this.props;
    const { recommendedStylesSlide } = this.state;

    console.log('recommendedStylesSlide em render');
    console.log(recommendedStylesSlide);

    const DECREMENT = -1;
    const INCREMENT = 1;

    // this.fillRecommendedStyles();

    return (
      <div>
        <h3> Recomendadas </h3>
        <div className="slideshow-container" ref={ this.slides }>
          <br />
          {recipesRecommended.map((item, index) => (
            <div
              data-testid={ `${index}-recomendation-card` }
              className="mySlides fade"
              // ref={ this.slides }
              key={ index }
            >
              <div className="numbertext">
                {`${index + 1} / ${recipesRecommended.length}`}
              </div>
              <img
                src={ item.strMealThumb || item.strDrinkThumb }
                style={ { width: '100%' } }
                alt="Recomendadação"
              />
              <div className="text">{ item.strMeal || item.strDrink }</div>
            </div>
          ))}
          <button
            className="prev"
            type="button"
            aria-label="botões de transição"
            onClick={ () => this.plusSlides(DECREMENT) }
            onKeyDown={ () => this.plusSlides(DECREMENT) }
          >
            &#10094;
          </button>
          <button
            className="next"
            type="button"
            aria-label="botões de transição"
            onClick={ () => this.plusSlides(INCREMENT) }
            onKeyDown={ () => this.plusSlides(INCREMENT) }
          >
            &#10095;
          </button>
        </div>
        <br />
        <div style={ { textAlign: 'center' } }>
          {recipesRecommended.map((_, index) => (
            <span
              className="dot"
              ref={ this.dots }
              role="button"
              aria-label="botões circulares de transição"
              onClick={ () => this.currentSlide(index) }
              onKeyDown={ () => this.currentSlide(index) }
              key={ index }
              tabIndex={ index }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default RecipesRecommended;

RecipesRecommended.propTypes = {
  recipesRecommended: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
