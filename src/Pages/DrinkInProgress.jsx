import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import favoriteImg from '../images/blackHeartIcon.svg';
import home from '../images/Home.svg';

export default class DrinkInProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkDetail: [],
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

    const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const json = await result.json();

    this.setState({
      drinkDetail: json.drinks,
    });

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
  }

  render() {
    const { drinkDetail, ingredient, measure } = this.state;
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

DrinkInProgress.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(),
  }),
}.isRequired;
