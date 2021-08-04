import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../App.css';

class ProcessoBebidas extends Component {
  constructor() {
    super();
    this.state = {
      cocktail: {},
      shareButton: false,
      favoriteButton: false,
    };
    this.fetchIdDrink = this.fetchIdDrink.bind(this);
    this.shareLinkClick = this.shareLinkClick.bind(this);
    this.favoriteButtonClick = this.favoriteButtonClick.bind(this);
    this.riskDoneIngredients = this.riskDoneIngredients.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    const { location } = history;
    const { pathname } = location;
    this.fetchIdDrink(pathname.split('/')[2]);
  }

  fetchIdDrink(id) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((data) => data.json())
      .then((response) => this.setState({ cocktail: response }));
  }

  shareLinkClick() {
    const magicNumber = 2000;
    navigator.clipboard.writeText(window.location.href);
    this.setState({ shareButton: true });
    setTimeout(() => this.setState({
      shareButton: false,
    }), magicNumber);
  }

  verifyButtonState() {
    const { history } = this.props;
    const { location } = history;
    const { pathname } = location;
    const urlId = pathname.split('/')[2];
    const stateFavoriteButton = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (stateFavoriteButton && stateFavoriteButton.some(({ id }) => id === urlId)) {
      this.setState({
        favoriteButton: true,
      });
    }
  }

  favoriteButtonClick() {
    const { favoriteButton, food } = this.state;
    const { meals } = food;
    const obj = {
      id: meals[0].idMeal,
      type: 'comida',
      area: meals[0].strArea,
      category: meals[0].strCategory,
      alcoholicOrNot: '',
      name: meals[0].strMeal,
      image: meals[0].strMealThumb,
    };

    this.setState({
      favoriteButton: !favoriteButton,
    }, () => {
      if (!localStorage.favoriteRecipes) {
        localStorage.setItem('favoriteRecipes', JSON.stringify([obj]));
      } else {
        const favoritesRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
        if (favoritesRecipes.some((value) => value.id === meals[0].idMeal)) {
          const attFavorite = favoritesRecipes
            .filter((value) => value.id !== meals[0].idMeal);
          localStorage.setItem('favoriteRecipes', JSON.stringify(attFavorite));
        } else {
          localStorage
            .setItem('favoriteRecipes', JSON.stringify([...favoritesRecipes, obj]));
        }
      }
    });
  }

  riskDoneIngredients({ target }) {
    const { checked } = target;
    if (checked) {
      target.parentNode.style.textDecoration = 'line-through';
    } else {
      target.parentNode.style.textDecoration = 'none';
    }
  }

  render() {
    const { cocktail, shareButton, favoriteButton } = this.state;
    const { drinks } = cocktail;
    if (!drinks) return <p>Carregando</p>;
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
            { !favoriteButton
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
            <div
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              <label htmlFor={ `${index}-ingredient-name-and-measure` }>
                <input
                  id={ `${index}-ingredient-name-and-measure` }
                  type="checkbox"
                  onClick={ this.riskDoneIngredients }
                />
                {`${value} - ${onlyMeasures[index]}`}
              </label>
            </div>
          )) }
          <p data-testid="instructions">{ strInstructions }</p>
        </div>
        <button
          data-testid="finish-recipe-btn"
          type="button"
          className="btn-start"
        >
          Finalizar Receita
        </button>
      </div>
    );
  }
}

export default ProcessoBebidas;

ProcessoBebidas.propTypes = {
  history: PropTypes.oneOfType.isRequired,
};
