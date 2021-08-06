import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';

class ComidasDetalhes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealDetails: {},
      ingredientList: [],
    };

    this.recipeDetailsFetchAPI = this.recipeDetailsFetchAPI.bind(this);
    this.CopyToClipboard = this.CopyToClipboard.bind(this);
  }

  componentDidMount() {
    this.recipeDetailsFetchAPI();
  }

  CopyToClipboard() { // https://orclqa.com/copy-url-clipboard/
    const inputc = document.body.appendChild(document.createElement('input'));
    inputc.value = window.location.href;
    inputc.focus();
    inputc.select();
    document.execCommand('copy');
    inputc.parentNode.removeChild(inputc);
    alert('Link copiado!');
  }

  async recipeDetailsFetchAPI() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const data = await response.json();
    const ingredientListBuffer = [];
    Object.keys(data.meals[0]).forEach((e) => {
      if (e.includes('strIngredient')) {
        return ingredientListBuffer.push(e);
      }
    });
    this.setState({
      mealDetails: data.meals[0],
      ingredientList: ingredientListBuffer,
    });
  }

  render() {
    const { mealDetails, ingredientList } = this.state;

    const {
      strMealThumb,
      strMeal,
      strCategory,
      strInstructions,
      strYoutube } = mealDetails;

    return (
      <div className="food-details">
        <img
          className="recipe-photo"
          data-testid="recipe-photo"
          alt={ strMealThumb }
          src={ strMealThumb }
        />
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => this.CopyToClipboard() }
        >
          Compartilhe
        </button>
        <button type="button" data-testid="favorite-btn">
          Favoritar
        </button>
        <h1 data-testid="recipe-title">{strMeal}</h1>
        <p data-testid="recipe-category">{strCategory}</p>
        <span>Ingredients</span>
        <ul>
          {ingredientList.map((e, index) => (mealDetails[e] ? (
            <li key={ e } data-testid={ `${index}-ingredient-name-and-measure` }>
              {mealDetails[e]}
              {' '}
              -
              {' '}
              {mealDetails[`strMeasure${e.match(/\d+/)[0]}`]}
            </li>
          ) : null))}
        </ul>
        <span>Instructions</span>
        <section id="instructions" data-testid="instructions">
          {strInstructions}
        </section>
        <iframe
          title={ strMeal }
          width="100%"
          height="260"
          data-testid="video"
          src={
            strYoutube
              ? `https://www.youtube.com/embed/${strYoutube.split('=')[1]}`
              : null
          }
        />
        <Carousel detailType="ComidasDetalhes" />
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="start-recipe"
        >
          Iniciar Receita
        </button>
      </div>
    );
  }
}
export default ComidasDetalhes;

ComidasDetalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
