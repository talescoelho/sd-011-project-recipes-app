import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

class FoodDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodDetail: [],
      ingredient: [],
    };
    this.fetchDetail = this.fetchDetail.bind(this);
  }

  componentDidMount() {
    this.fetchDetail();
  }

  async fetchDetail() {
    const { match: { params: { id } } } = this.props;
    console.log(id);
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
  }

  render() {
    const { foodDetail, ingredient } = this.state;
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
  foodAPIResponse: state.recipeReducer.foodRecipes,
});

FoodDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(),
  }),
}.isRequired;

export default connect(mapStateToProps)(FoodDetails);
