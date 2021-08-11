import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import { addRecipeOngoing, addRecipeFavorite } from '../actions';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

class ComidasDetalhes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealDetails: {},
      ingredientList: [],
      finalList: [],
      isMealDone: false,
      isMealInProgress: false,
      buttonText: '',
    };

    this.recipeDetailsFetchAPI = this.recipeDetailsFetchAPI.bind(this);
    this.CopyToClipboard = this.CopyToClipboard.bind(this);
  }

  componentDidMount() {
    this.recipeDetailsFetchAPI();
    this.fetchInProgressRecipes();
    this.fetchDoneRecipes();
  }

  fetchInProgressRecipes() {
    const { match: { params: { id } } } = this.props;
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes !== null) {
      const inProgress = Object.hasOwnProperty.call(inProgressRecipes.meals, id);
      this.setState({
        isMealInProgress: inProgress,
      });
    }
  }

  fetchDoneRecipes() {
    const { match: { params: { id } } } = this.props;
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes !== null) {
      const filter = doneRecipes.filter((recipe) => recipe.id === id);
      if (filter.length >= 1) {
        this.setState({
          isMealDone: true,
        });
      }
    }
  }

  CopyToClipboard() { // https://orclqa.com/copy-url-clipboard/
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
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
    }, () => {
      const { ingredientList, mealDetails } = this.state;
      const doneList = ingredientList.map((e) => (mealDetails[e]
        ? `${mealDetails[e]} - ${mealDetails[`strMeasure${e.match(/\d+/)[0]}`]}`
        : null)).filter(Boolean);
      this.setState({
        finalList: doneList,
      });
    });
  }

  render() {
    const { mealDetails, ingredientList, finalList,
      isMealDone, isMealInProgress, buttonText } = this.state;
    const { addRecipeCurr, addRecipeFav, match: {
      params: { id },
    } } = this.props;
    const obj = {
      id: mealDetails.idMeal,
      type: 'comida',
      area: mealDetails.strArea,
      category: mealDetails.strCategory,
      alcoholicOrNot: '',
      name: mealDetails.strMeal,
      image: mealDetails.strMealThumb,
    };
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
          <img src={ shareIcon } alt="icone botão" />
          { buttonText }
        </button>
        <button
          type="button"
          data-testid="favorite-btn"
          onClick={ () => addRecipeFav(obj) }
        >
          Favoritar
        </button>
        <Link to="/comidas">
          <button type="button">
            Voltar para página de comidas
          </button>
        </Link>
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
        { isMealDone ? <div>...</div> : (
          <Link
            to={ {
              pathname: `/comidas/${id}/in-progress`,
            } }
          >
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="start-recipe"
              onClick={ () => addRecipeCurr(mealDetails.idMeal, finalList) }
            >
              Iniciar Receita
            </button>
          </Link>
        )}
        { !isMealInProgress ? <div>...</div> : (
          <Link
            to={ {
              pathname: `/comidas/${id}/in-progress`,
            } }
          >
            <button
              type="button"
              className="start-recipe"
              data-testid="start-recipe-btn"
            >
              Continuar Receita
            </button>
          </Link>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRecipeCurr: (id, list) => dispatch(addRecipeOngoing(id, list)),
  addRecipeFav: (meal) => dispatch(addRecipeFavorite(meal)),
});

export default connect(null, mapDispatchToProps)(ComidasDetalhes);

ComidasDetalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  addRecipeCurr: PropTypes.func,
  addRecipeFav: PropTypes.func,
}.isRequired;
