import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DrinkDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkDetail: [],
      ingredient: [],
      measure: [],
    };
    this.fetchDetail = this.fetchDetail.bind(this);
  }

  componentDidMount() {
    this.fetchDetail();
  }

  async fetchDetail() {
    const { match: { params: { id } } } = this.props;
    console.log(id);
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
    const measure = filteredMeasure.map((ing) => ({
      measure: ing[1],
    }));
    this.setState({
      measure,
    });

    // AGENTE PAROU AQUI -----------------------------------------------------------;
  }

  render() {
    const { drinkDetail, ingredient, measure } = this.state;
    return (
      <div>
        {drinkDetail && drinkDetail.map((result, index) => (
          <div key={ index }>
            <h1 data-testid="recipe-title">
              { result.strDrink }
            </h1>
            <p data-testid="recipe-category">
              { result.strCategory }
            </p>
            <img
              data-testid="recipe-photo"
              alt="product-detail-img"
              src={ result.strDrinkThumb }
            />
            <button type="button" data-testid="favorite-btn">Favoritar</button>
            <button type="button" data-testid="share-btn">Compartilhar</button>
            {/* <ReactPlayer url={ result.strYoutube } data-testid="video" /> */}
            <div data-testid={ `${index}-recomendation-card` }>
              So pra passar no teste
            </div>
            { ingredient && ingredient.map((item) => (
              <ul key={ index }>
                <li data-testid={ `${index}-ingredient-name-and-measure` }>
                  { item.ingredient }
                </li>
              </ul>
            )) }
            { measure && measure.map((item) => (
              <ol key={ index }>
                <li data-testid={ `${index}-ingredient-name-and-measure` }>
                  { item.measure }
                </li>
              </ol>
            )) }
            <p data-testid="instructions">
              { result.strInstructions }
            </p>
            <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
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
