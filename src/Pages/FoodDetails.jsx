import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Carousel from 'react-bootstrap/Carousel';

class FoodDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodDetail: [],
      ingredient: [],
      measure: [],
      recomandation: [],
    };
    this.fetchDetail = this.fetchDetail.bind(this);
    this.renderRecomendations = this.renderRecomendations.bind(this);
  }

  componentDidMount() {
    this.fetchDetail();
  }

  async fetchDetail() {
    const { match: { params: { id } } } = this.props;

    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const json = await result.json();

    this.setState({
      foodDetail: json.meals,
    });

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((item) => item.json())
      .then((mewResult) => this.setState({
        recomandation: mewResult.drinks,
      }));

    const filteredIngredients = Object.entries(json.meals[0]).filter(
      (arr) => arr[0].includes('Ingredient') && arr[1],
    );
    const ingredients = filteredIngredients.map((ing) => ({
      ingredient: ing[1],
    }));
    this.setState({
      ingredient: ingredients,
    });
    const filteredMeasure = Object.entries(json.meals[0]).filter(
      (arr) => arr[0].includes('Measure') && arr[1],
    );
    const measure = filteredMeasure.map((eachIngredient) => eachIngredient[1]);
    this.setState({
      measure,
    });
  }

  renderRecomendations() {
    const { recomandation } = this.state;
    const number6 = 6;
    const sliceOfRecomandation = recomandation.slice(0, number6);
    return (
      <Carousel className="rec-carousel" variant="dark">
        { sliceOfRecomandation.map((item, index) => (
          <Carousel.Item
            key={ `rec-${index}` }
            data-testid={ `${index}-recomendation-card` }
          >
            <img src={ item.strDrinkThumb } alt="imagem" />
            <Carousel.Caption>
              <h5 data-testid={ `${index}-recomendation-title` }>{ item.strDrink }</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

  render() {
    const { foodDetail, ingredient, measure, recomandation } = this.state;
    return (
      <div>
        {foodDetail && foodDetail.map((result, index) => (
          <div key={ index }>
            <h1 data-testid="recipe-title">
              { result.strMeal }
            </h1>
            <p data-testid="recipe-category">
              { result.strCategory }
            </p>
            <img
              data-testid="recipe-photo"
              alt="product-detail-img"
              src={ result.strMealThumb }
            />
            <button type="button" data-testid="favorite-btn">Favoritar</button>
            <button type="button" data-testid="share-btn">Compartilhar</button>
            <ReactPlayer url={ result.strYoutube } data-testid="video" />
            { recomandation && this.renderRecomendations() }
            { ingredient && ingredient.map((item, ingredientIndex) => (
              <ul key={ ingredientIndex }>
                <li data-testid={ `${ingredientIndex}-ingredient-name-and-measure` }>
                  { `${item.ingredient} - ${measure[ingredientIndex]}` }
                </li>
              </ul>
            )) }
            <p data-testid="instructions">
              { result.strInstructions }
            </p>
            <button
              type="button"
              data-testid="start-recipe-btn"
              style={ {
                position: 'fixed',
                bottom: '0px' } }
            >
              Iniciar Receita
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foodAPIResponse: state.recipeReducer.foodRecipes,
});

FoodDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(),
  }),
}.isRequired;

export default connect(mapStateToProps)(FoodDetails);
