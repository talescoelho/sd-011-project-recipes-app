import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function RecipeDetail({ history }) {
  const { id } = useParams();
  function mealMain() {
    return (
      <main data-testid="recipes-page">
        <h1>Conteúdo da tela de DETALHES de COMIDAS</h1>
        <br />
        <img data-testid="recipe-photo" alt="" />
        <br />
        <h2 data-testid="recipe-title"> Title here</h2>
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
        <h4 data-testid="recipe-category"> Category</h4>
        <br />
        <br />
        <h3> Ingredientes</h3>
        <ul name="ingredients-list">
          <li data-testid="0-ingredient-name-and-measure">Algum ingredinte aqui</li>
          <li>Algum ingredinte aqui</li>
          <li> E por ai vai...</li>
        </ul>
        <br />
        <br />
        <div data-testid="instructions">
          <h3> Instruções</h3>
          <br />
          Texto das instrunções por aqui.
          <br />
        </div>
        <br />
        <div data-testid="video">
          <h3> Video </h3>
          <br />
          Video aqui.
        </div>
        <br />
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

  function drinkMain() {
    return (
      <main data-testid="recipes-page">
        <h1>Conteúdo da tela de DETALHES de BEBIDAS</h1>
        <br />
        <img data-testid="recipe-photo" alt="" />
        <br />
        <h2 data-testid="recipe-title"> Title here</h2>
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
        <h4 data-testid="recipe-category"> Category</h4>
        <br />
        <br />
        <h3> Ingredientes</h3>
        <ul name="ingredients-list">
          <li data-testid="0-ingredient-name-and-measure">Algum ingredinte aqui</li>
          <li>Algum ingredinte aqui</li>
          <li> E por ai vai...</li>
        </ul>
        <br />
        <br />
        <div data-testid="instructions">
          <h3> Instruções</h3>
          <br />
          Texto das instrunções por aqui.
          <br />
        </div>
        <br />
        <div data-testid="video">
          <h3> Video </h3>
          <br />
          Video aqui.
        </div>
        <br />
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

  return (
    <div>
      {history.location.pathname === `/comidas/${id}`
        ? mealMain() : drinkMain() }
    </div>
  );
}

RecipeDetail.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
}.isRequired;

export default RecipeDetail;
