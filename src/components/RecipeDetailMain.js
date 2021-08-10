import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class RecipeDetailMain extends Component {
  constructor() {
    super();

    this.main = this.main.bind(this);
  }

  main(recipeDetail) {
    const { history: { location: { pathname } } } = this.props;

    let strThumb = '';
    let str = '';
    let category = '';

    const { strMealThumb, strDrinkThumb, strDrink, strMeal,
      strCategory, strAlcoholic, strInstructions,
      strYoutube } = recipeDetail;

    if (pathname.includes('comidas')) {
      strThumb = strMealThumb;
      str = strMeal;
      category = strCategory;
    } else {
      strThumb = strDrinkThumb;
      str = strDrink;
      category = strAlcoholic;
    }

    const strYoutubeEmbed = strYoutube && strYoutube.replace('watch?v=', 'embed/');

    let count = 1;

    const ingredientes = recipeDetail && Object.keys(recipeDetail)
      .filter((item) => {
        if (item === `strIngredient${count}` && recipeDetail[item]) {
          count += 1;
          return true;
        }
        return false;
      }).map((item, index) => {
        if (recipeDetail[item]) {
          const strIngredient = `${recipeDetail[`strIngredient${index + 1}`]} - `;
          const strMeasure = `${recipeDetail[`strMeasure${index + 1}`]}`;
          return [strIngredient, strMeasure].join('');
        }
        return null;
      });

    return (
      <main data-testid="recipes-page">
        <h1>Conteúdo da tela de DETALHES de COMIDAS</h1>
        <br />
        <img data-testid="recipe-photo" alt="meal recipe" src={ strThumb } />
        <br />
        <h2 data-testid="recipe-title">{ str }</h2>
        <br />
        <button data-testid="share-btn" type="button">
          <img alt="" />
        </button>
        &nbsp;  &nbsp;
        <button data-testid="favorite-btn" type="button">
          <img alt="" />
        </button>
        <br />
        <br />
        <h4 data-testid="recipe-category">{ category }</h4>
        <br />
        <br />
        <h3> Ingredientes</h3>
        <ul name="ingredients-list">
          <br />
          {ingredientes.map((mealIngred, index) => (
            <li
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ index }
            >
              { mealIngred }
            </li>))}
        </ul>
        <br />
        <br />
        <div data-testid="instructions">
          <h3> Instruções</h3>
          <br />
          { strInstructions }
          <br />
        </div>
        <br />
        {strYoutube
        && (
          <div>
            <h3> Video </h3>
            <br />
            <iframe
              data-testid="video"
              width="853"
              height="480"
              src={ strYoutubeEmbed }
              title="Embedded youtube"
            />
            <br />
          </div>
        )}
        <div>
          <h3> Recomendadas </h3>
          <br />
          <div data-testid="0-recomendation-card">
            Aqui vai um card
          </div>
          <div data-testid="1-recomendation-card">
            Aqui vai outro card
          </div>
          E po aí vão as divs
        </div>
        <br />
        <br />
        <button data-testid="start-recipe-btn" type="button"> Iniciar receita</button>
      </main>
    );
  }

  render() {
    const { recipeDetail } = this.props;
    return (
      <div>
        { this.main(recipeDetail) }
      </div>
    );
  }
}

export default withRouter(RecipeDetailMain);

RecipeDetailMain.propTypes = {
  path: PropTypes.string,
  recipeDetail: PropTypes.object,
}.isRequired;
