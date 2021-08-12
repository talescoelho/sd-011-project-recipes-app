import React from 'react';
import PropTypes from 'prop-types';

class RecipesRecommended extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     slideIndex: 1,
  //     recommendedStyles: [],
  //     mySlides: '',
  //     dot: '',
  //   };

  // this.plusSlides = this.plusSlides.bind(this);
  // this.showSlides = this.showSlides.bind(this);
  // this.currentSlide = this.currentSlide.bind(this);
  // this.fillRecommendedStyles = this.fillRecommendedStyles.bind(this);
  // }

  componentDidMount() {
    const { slideIndex } = this.state; // Aqui
    // this.showSlides(slideIndex, recipeRecommended); // Aqui
  }

  // fillRecommendedStyles () {
  //   const { recipeRecommended } = this.props;
  //   const styleArray = recipeRecommended && recipeRecommended.map((item, index) => ({
  //   }));
  //   this.setState({
  //     recommendedStyles: styleArray,
  //   });
  // }

  // /// ABAIXO  lógica das recomendações

  // // var slideIndex = 1;
  // // showSlides(slideIndex);

  // // Next/previous controls
  // plusSlides(n) {
  //   const { slideIndex } = this.state;
  //   this.setState({
  //     slideIndex: n,
  //   });
  //   this.showSlides(slideIndex + n);
  // }

  // // Thumbnail image controls
  // currentSlide(n) {
  //   this.setState((prev) => ({
  //     slideIndex: prev + n,
  //   }));
  //   this.showSlides(n);
  // }

  // showSlides(n, recipeRecommended) {
  //   const { slideIndex } = this.state;
  //   let i;

  //   // const slides = document.getElementsByClassName('mySlides');
  //   // const dots = document.getElementsByClassName('dot');

  //   if (n > recipeRecommended.length) {
  //     this.setState({ slideIndex: 1 });
  //   }
  //   if (n < 1) {
  //     this.setState({ slideIndex: recipeRecommended.length });
  //   }
  //   for (i = 0; i < recipeRecommended.length; i += 1) {
  //     slides[i].style.display = 'none';
  //   }
  //   for (i = 0; i < dots.length; i += 1) {
  //     dots[i].className = dots[i].className.replace('active', '');
  //   }
  //   const decr = slideIndex - 1;
  //   slides[decr].style.display = 'block';
  //   dots[decr].className += 'active';
  // }

  /// ACIMA lógica das recomendações

  render() {
    const { recipesRecommended } = this.props;

    const DECREMENT = -1;
    const INCREMENT = 1;

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
            // onClick={ this.plusSlides(DECREMENT) }
            // onKeyDown={ this.plusSlides(DECREMENT) }
          >
            &#10094;
          </button>
          <button
            className="next"
            type="button"
            aria-label="botões de transição"
            // onClick={ this.plusSlides(INCREMENT) }
            // onKeyDown={ this.plusSlides(INCREMENT) }
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
              // onClick={ this.currentSlide(index) }
              // onKeyDown={ this.currentSlide(index) }
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
