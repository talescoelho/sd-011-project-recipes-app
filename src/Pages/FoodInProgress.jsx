import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import favoriteImg from '../images/blackHeartIcon.svg';
import home from '../images/Home.svg';

export default class FoodInProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodDetail: [],
      ingredient: [],
      measure: [],
    };
    this.fetchDetail = this.fetchDetail.bind(this);
    this.setClassBox = this.setClassBox.bind(this);
  }

  componentDidMount() {
    this.fetchDetail();
  }

  setClassBox({ target }) {
    const label = target.parentElement;
    if (target.checked) {
      label.className = 'instructions-checked';
    } else {
      label.className = 'instructions';
    }
  }

  async fetchDetail() {
    const { match: { params: { id } } } = this.props;

    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

    const json = await result.json();

    this.setState({
      foodDetail: json.meals,
    });

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

  render() {
    const { foodDetail, ingredient, measure } = this.state;
    return (
      <div className="detailContainer">
        {foodDetail && foodDetail.map((result, index) => (
          <div key={ index }>
            <div className="header-detail-recipe">
              <Link to="/comidas">
                <img className="homeImg" src={ home } alt="home" />
              </Link>
              <div className="containerForTitle">
                <h1 data-testid="recipe-title">
                  { result.strMeal }
                </h1>
                <hr id="seraquevai" />
                <p data-testid="recipe-category">
                  { result.strCategory }
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
              src={ result.strMealThumb }
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
            { ingredient && ingredient.map((item, ingredientIndex) => (

              <label
                htmlFor={ ingredientIndex }
                className="instructions"
                key={ ingredientIndex }
                data-testid={ `${ingredientIndex}--ingredient-step` }
              >
                <input
                  id={ ingredientIndex }
                  type="checkbox"
                  onClick={ (event) => this.setClassBox(event) }
                />
                { ` ${item.ingredient} - ${measure[ingredientIndex]}` }
              </label>

            )) }
            <p className="instructions" data-testid="instructions">
              { result.strInstructions }
            </p>
            <button
              id="initRecipe"
              type="button"
              data-testid="finish-recipe-btn"
            >
              Finalizar Receita
            </button>
          </div>
        ))}
      </div>
    );
  }
}

FoodInProgress.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(),
  }),
}.isRequired;
