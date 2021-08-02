import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../App.css';

class DetalhesBebidas extends Component {
  constructor() {
    super();
    this.state = {
      cocktail: {},
      recomendations: [],
      showButton: true,
      nameButton: true,
      shareButton: false,
      favoriteButton: false,
    };

    this.fetchIdDrink = this.fetchIdDrink.bind(this);
    this.recomendationsFetch = this.recomendationsFetch.bind(this);
    this.handleStateButton = this.handleStateButton.bind(this);
    this.handleNameButton = this.handleNameButton.bind(this);
    this.shareLinkClick = this.shareLinkClick.bind(this);
    this.favoriteButtonClick = this.favoriteButtonClick.bind(this);
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

  shareLinkClick() {
    const magicNumber = 2000;
    navigator.clipboard.writeText(window.location.href);
    this.setState({
      shareButton: true,
    });
    setTimeout(() => this.setState({
      shareButton: false,
    }), magicNumber);
  }

  favoriteButtonClick() {
    const { favoriteButton } = this.state;
    this.setState({
      favoriteButton: !favoriteButton,
    });
  }

  render() {
    const { history } = this.props;
    const { location } = history;
    const { pathname } = location;
    const id = pathname.split('/')[2];
    const { cocktail,
      recomendations, showButton, nameButton, shareButton, favoriteButton } = this.state;
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
            onClick={ this.shareLinkClick }
          >
            <img src={ shareIcon } alt="share" />
          </button>
          <button
            type="button"
            onClick={ this.favoriteButtonClick }
          >
            { favoriteButton
              ? (
                <img
                  data-testid="favorite-btn"
                  src={ whiteHeartIcon }
                  alt="no-favorite"
                />)
              : (
                <img
                  data-testid="favorite-btn"
                  src={ blackHeartIcon }
                  alt="yes-favorite"
                />)}
          </button>
          {shareButton ? <span style={ { color: 'red' } }>Link copiado!</span> : null}
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
