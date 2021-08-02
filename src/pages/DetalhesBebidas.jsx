import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../App.css';

class DetalhesBebidas extends Component {
  constructor() {
    super();
    this.state = {
      cocktail: {},
      recomendations: [],
      showButton: true,
      nameButton: true,
    };

    this.fetchIdDrink = this.fetchIdDrink.bind(this);
    this.recomendationsFetch = this.recomendationsFetch.bind(this);
    this.handleStateButton = this.handleStateButton.bind(this);
    this.handleNameButton = this.handleNameButton.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    const { location } = history;
    const { pathname } = location;
    this.fetchIdDrink(pathname.split('/')[2]);
    this.recomendationsFetch();
    this.handleStateButton();
    this.handleNameButton();
  }

  handleStateButton() {
    const { history } = this.props;
    const { location } = history;
    const { pathname } = location;
    const urlId = pathname.split('/')[2];
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes && doneRecipes.some(({ id }) => id === urlId)) {
      this.setState({
        showButton: false,
      });
    }
  }

  handleNameButton() {
    const { history } = this.props;
    const { location } = history;
    const { pathname } = location;
    const urlId = pathname.split('/')[2];
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes && inProgressRecipes.cocktails[urlId]) {
      this.setState({
        nameButton: false,
      });
    }
  }

  fetchIdDrink(id) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((data) => data.json())
      .then((response) => this.setState({
        cocktail: response,
      }));
  }

  recomendationsFetch() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((data) => data.json())
      .then((response) => this.setState({
        recomendations: response,
      }));
  }

  render() {
    const { history } = this.props;
    const { location } = history;
    const { pathname } = location;
    const id = pathname.split('/')[2];
    const { cocktail, recomendations, showButton, nameButton } = this.state;
    const { drinks } = cocktail;
    const { meals } = recomendations;
    const magicNumber = 6;
    if (!drinks) {
      return <p>Carregando</p>;
    }
    const { strDrinkThumb, strDrink, strAlcoholic, strInstructions } = drinks[0];
    const ingredientes = Object.keys(drinks[0]);
    const filtrados = ingredientes.filter((value) => value.includes('strIngredient'));
    const values = filtrados.map((value) => drinks[0][value]);
    const onlyIngredientes = values.filter((value) => value);
    const filtradosMeasure = ingredientes.filter((value) => value.includes('strMeasure'));
    const valuesMeasure = filtradosMeasure.map((value) => drinks[0][value]);
    const onlyMeasures = valuesMeasure.filter((value) => value);
    return (
      <div>
        Detalhes de bebidas
        <div>
          <img
            data-testid="recipe-photo"
            src={ strDrinkThumb }
            alt={ strDrink }
            style={ { width: '100px' } }
          />
        </div>
        <div>
          <h3 data-testid="recipe-title">{ strDrink }</h3>
          <button
            type="button"
            data-testid="share-btn"
          >
            <img src={ shareIcon } alt="share" />
          </button>
          <button
            type="button"
            data-testid="favorite-btn"
          >
            <img src={ whiteHeartIcon } alt="favorite" />
          </button>
          <p data-testid="recipe-category">{ strAlcoholic }</p>
          <p>Ingredientes:</p>
          { onlyIngredientes.map((value, index) => (
            <p
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {`${value} - ${onlyMeasures[index]}`}
            </p>)) }
          <p data-testid="instructions">{ strInstructions }</p>
        </div>
        <div className="div-scroll">
          {
            meals
            && meals.map((value, index) => (
              index < magicNumber
            && (
              <div
                data-testid={ `${index}-recomendation-card` }
                className="recomendation-card"
              >
                { console.log(meals) }
                <img
                  className="img-card"
                  src={ value.strMealThumb }
                  alt={ value.strMeal }
                />
                <p data-testid={ `${index}-recomendation-title` }>{ value.strMeal }</p>
                <p>{ value.strCategory }</p>
              </div>)
            ))
          }
        </div>
        {showButton
          && (
            <Link to={ `/bebidas/${id}/in-progress` }>
              <div>
                <button
                  data-testid="start-recipe-btn"
                  type="button"
                  className="btn-start"
                >
                  { nameButton ? 'Iniciar Receita' : 'Continuar Receita'}
                </button>
              </div>
            </Link>)}
      </div>
    );
  }
}

export default DetalhesBebidas;

DetalhesBebidas.propTypes = {
  history: PropTypes.oneOfType.isRequired,
};
