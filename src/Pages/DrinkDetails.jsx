import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import favoriteImg from '../images/blackHeartIcon.svg';
import home from '../images/Home.svg';

class DrinkDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkDetail: [],
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

    const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const json = await result.json();

    this.setState({
      drinkDetail: json.drinks,
    });

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((item) => item.json())
      .then((mewResult) => this.setState({
        recomandation: mewResult.meals,
      }));

    const filteredIngredients = Object.entries(json.drinks[0]).filter(
      (arr) => arr[0].includes('Ingredient', 'measure') && arr[1],
    );
    const ingredients = filteredIngredients.map((ing) => ({
      ingredient: ing[1],
    }));
    this.setState({
      ingredient: ingredients,
    });
    const filteredMeasure = Object.entries(json.drinks[0]).filter(
      (arr) => arr[0].includes('Measure') && arr[1],
    );
    const measure = filteredMeasure.map((eachIngredient) => eachIngredient[1]);
    this.setState({
      measure,
    });

    // AGENTE PAROU AQUI -----------------------------------------------------------;
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
            <img className="detailImg" src={ item.strMealThumb } alt="imagem" />
            <Carousel.Caption>
              <h5 data-testid={ `${index}-recomendation-title` }>{ item.strMeal }</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

  render() {
    const { drinkDetail, ingredient, measure, recomandation } = this.state;
    return (
      <div className="detailContainer">
        {drinkDetail && drinkDetail.map((result, index) => (
          <div key={ index }>
            <div className="header-detail-recipe">
              <Link to="/comidas">
                <img className="homeImg" src={ home } alt="home" />
              </Link>
              <div className="containerForTitle">
                <h1 data-testid="recipe-title">
                  { result.strDrink }
                </h1>
                <hr id="seraquevai" />
                <p data-testid="recipe-category">
                  { result.strAlcoholic }
                </p>
              </div>
              <button className="hearth" type="button" data-testid="favorite-btn">
                <img src={ favoriteImg } alt="favorite-img" />
              </button>
            </div>
            <img
              className="detailImg"
              data-testid="recipe-photo"
              alt="product-detail-img"
              src={ result.strDrinkThumb }
            />
            <button
              style={ { color: 'white',
                backgroundColor: 'rgb(151, 0, 0)',
                width: '100%' } }
              type="button"
              data-testid="share-btn"
            >
              Compartilhar
            </button>
            { recomandation && this.renderRecomendations() }
            { ingredient && ingredient.map((item, ingredientIndex) => (
              <ul className="instructions" key={ ingredientIndex }>
                <li data-testid={ `${ingredientIndex}-ingredient-name-and-measure` }>
                  { `${item.ingredient} - ${measure[ingredientIndex]}` }
                </li>
              </ul>
            )) }
            <p className="instructions" data-testid="instructions">
              { result.strInstructions }
            </p>
            <button
              id="initRecipe"
              type="button"
              data-testid="start-recipe-btn"
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
  drinkAPIResponse: state.recipeReducer.drinkRecipes,
});

DrinkDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(),
  }),
}.isRequired;

export default connect(mapStateToProps)(DrinkDetails);
