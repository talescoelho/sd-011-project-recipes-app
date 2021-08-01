import React, { Component } from 'react';
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
    };

    this.fetchIdDrink = this.fetchIdDrink.bind(this);
    this.recomendationsFetch = this.recomendationsFetch.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    const { location } = history;
    const { pathname } = location;
    this.fetchIdDrink(pathname.split('/')[2]);
    this.recomendationsFetch();
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
    const { cocktail, recomendations } = this.state;
    const { drinks } = cocktail;
    const { meals } = recomendations;
    const magicNumber = 6;
    console.log(meals);
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
        <div>
          <button
            data-testid="start-recipe-btn"
            type="button"
            className="btn-start"
          >
            Iniciar Receita
          </button>
        </div>
      </div>
    );
  }
}

export default DetalhesBebidas;

DetalhesBebidas.propTypes = {
  history: PropTypes.oneOfType.isRequired,
};
