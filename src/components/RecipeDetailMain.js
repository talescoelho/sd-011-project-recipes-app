import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class RecipeDetailMain extends Component {
  constructor() {
    super();

    this.main = this.main.bind(this);
  }

  main(recipeDetail, recipeRecommended) {
    const { strMealThumb, strDrinkThumb, strDrink, strMeal,
      strCategory, strAlcoholic, strInstructions,
      strYoutube } = recipeDetail;

    const strThumb = strDrinkThumb || strMealThumb;
    const str = strMeal || strDrink;
    const category = strAlcoholic || strCategory;

    const strYoutubeEmbed = strYoutube && strYoutube.replace('watch?v=', 'embed/');

    let count = 1;

    const DECREMENT = -1;
    const INCREMENT = 1;

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
          {ingredientes.map((ingred, index) => (
            <li
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ index }
            >
              { ingred }
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
          <div className="slideshow-container">
            <br />
            {recipeRecommended.map((item, index) => (
              <div
                data-testid={ `${index}-recomendation-card` }
                className="mySlides fade"
                key={ index }
              >
                <div className="numbertext">
                  {`${index + 1} / ${recipeRecommended.length}`}
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
              onClick={ plusSlides(DECREMENT) }
              onKeyDown={ plusSlides(DECREMENT) }
            >
              &#10094;
            </button>
            <button
              className="next"
              type="button"
              aria-label="botões de transição"
              onClick={ plusSlides(INCREMENT) }
              onKeyDown={ plusSlides(INCREMENT) }
            >
              &#10095;
            </button>
          </div>
          <br />
          <div style={ { textAlign: 'center' } }>
            {recipeRecommended.map((_, index) => (
              <span
                className="dot"
                role="button"
                aria-label="botões circulares de transição"
                onClick={ currentSlide(index) }
                onKeyDown={ currentSlide(index) }
                key={ index }
                tabIndex={ index }
              />
            ))}
          </div>
        </div>
        <br />
        <br />
        <button data-testid="start-recipe-btn" type="button"> Iniciar receita</button>
      </main>
    );
  }

  render() {
    const { recipeDetail, recipeRecommended } = this.props;
    return (
      <div>
        { this.main(recipeDetail, recipeRecommended) }
      </div>
    );
  }
}

export default withRouter(RecipeDetailMain);

RecipeDetailMain.propTypes = {
  recipeDetail: PropTypes.object,
}.isRequired;
