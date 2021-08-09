import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetail } from '../actions';

function RecipeDetail({ history: { location: { pathname } },
  dispatchFetchDetail, recipeDetailMeal, recipeDetailDrink }) {
  const { id } = useParams();

  React.useEffect(() => {
    const type = pathname.includes('comidas') ? 'comidas' : 'bebidas';
    dispatchFetchDetail(type, id);
  }, [id, pathname, dispatchFetchDetail]);

  function mealMain() {
    const { strMealThumb, strMeal, strCategory, strInstructions,
      strYoutube } = recipeDetailMeal;

    const strYoutubeEmbed = strYoutube && strYoutube.replace('watch?v=', 'embed/');

    let count = 1;

    const ingredientes = recipeDetailMeal && Object.keys(recipeDetailMeal)
      .filter((item) => {
        if (item === `strIngredient${count}` && recipeDetailMeal[item]) {
          count += 1;
          return true;
        }
        return false;
      }).map((item, i) => {
        if (recipeDetailMeal[item]) {
          const strIngredient = `${recipeDetailMeal[`strIngredient${i + 1}`]} - `;
          const strMeasure = `${recipeDetailMeal[`strMeasure${i + 1}`]}`;
          return [strIngredient, strMeasure].join('');
        }
        return null;
      });

    return (
      <main data-testid="recipes-page">
        <h1>Conteúdo da tela de DETALHES de COMIDAS</h1>
        <br />
        <img data-testid="recipe-photo" alt="meal recipe" src={ strMealThumb } />
        <br />
        <h2 data-testid="recipe-title">{ strMeal }</h2>
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
        <h4 data-testid="recipe-category">{ strCategory }</h4>
        <br />
        <br />
        <h3> Ingredientes</h3>
        <ul name="ingredients-list">
          <br />
          {ingredientes.map((mealIngred, i) => (
            <li
              data-testid={ `${i}-ingredient-name-and-measure` }
              key={ i }
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
        <div data-testid="video">
          <h3> Video </h3>
          <br />
          <iframe
            width="853"
            height="480"
            src={ strYoutubeEmbed }
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
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
    const { strDrinkThumb, strDrink, strAlcoholic,
      strInstructions } = recipeDetailDrink;

    let count = 1;

    const ingredientes = recipeDetailDrink && Object.keys(recipeDetailDrink)
      .filter((item) => {
        if (item === `strIngredient${count}` && recipeDetailDrink[item]) {
          count += 1;
          return true;
        }
        return false;
      }).map((item, i) => {
        if (recipeDetailDrink[item]) {
          const strIngredient = `${recipeDetailDrink[`strIngredient${i + 1}`]} - `;
          const strMeasure = `${recipeDetailDrink[`strMeasure${i + 1}`]}`;
          return [strIngredient, strMeasure].join('');
        }
        return null;
      });

    return (
      <main data-testid="recipes-page">
        <h1>Conteúdo da tela de DETALHES de BEBIDAS</h1>
        <br />
        <img data-testid="recipe-photo" alt="drink recipe" src={ strDrinkThumb } />
        <br />
        <h2 data-testid="recipe-title">{strDrink}</h2>
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
        <h4 data-testid="recipe-category">{strAlcoholic}</h4>
        <br />
        <br />
        <h3> Ingredientes</h3>
        <ul name="ingredients-list">
          <br />
          {ingredientes.map((drinkIngred, i) => (
            <li
              data-testid={ `${i}-ingredient-name-and-measure` }
              key={ i }
            >
              { drinkIngred }
            </li>))}
        </ul>
        <br />
        <br />
        <div data-testid="instructions">
          <h3> Instruções</h3>
          <br />
          {strInstructions}
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
      {pathname === `/comidas/${id}`
        ? mealMain() : drinkMain() }
    </div>
  );
}

const mapStateToProps = ({ recipeDetailReducer }) => ({
  recipeDetailMeal: recipeDetailReducer.meal.detail,
  recipeDetailDrink: recipeDetailReducer.drink.detail,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchDetail: (type, id) => dispatch(fetchRecipeDetail(type, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);

RecipeDetail.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
  recipeDetailMeal: PropTypes.object,
  recipeDetailDrink: PropTypes.object,
  dispatchFetchDetail: PropTypes.func,
}.isRequired;
