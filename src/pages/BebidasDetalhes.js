import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

class BebidasDetalhes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkDetails: {},
      ingredientList: [],
    };

    this.drinkDetailsFetchAPI = this.drinkDetailsFetchAPI.bind(this);
    this.CopyToClipboard = this.CopyToClipboard.bind(this);
  }

  componentDidMount() {
    this.drinkDetailsFetchAPI();
  }

  CopyToClipboard() {
    // https://orclqa.com/copy-url-clipboard/
    const inputc = document.body.appendChild(document.createElement('input'));
    inputc.value = window.location.href;
    inputc.focus();
    inputc.select();
    document.execCommand('copy');
    inputc.parentNode.removeChild(inputc);
    alert('Link copiado!');
  }

  async drinkDetailsFetchAPI() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const data = await response.json();
    const ingredientListBuffer = [];
    Object.keys(data.drinks[0]).forEach((e) => {
      if (e.includes('strIngredient')) {
        return ingredientListBuffer.push(e);
      }
    });
    this.setState({
      drinkDetails: data.drinks[0],
      ingredientList: ingredientListBuffer,
    });
  }

  render() {
    const { drinkDetails, ingredientList } = this.state;

    const { strDrink, strDrinkThumb, strAlcoholic, strInstructions } = drinkDetails;
    return (
      <div>
        <h1 data-testid="recipe-title">{strDrink}</h1>
        <img
          data-testid="recipe-photo"
          className="recipe-photo"
          alt={ `${strDrink}` }
          src={ strDrinkThumb }
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
        <Link to="/bebidas">
          <button type="button">
            Voltar para página de comidas
          </button>
        </Link>
        <p data-testid="recipe-category">{strAlcoholic}</p>
        <span>Ingredients</span>
        <ul>
          {ingredientList.map((e, index) => (drinkDetails[e] ? (
            <li key={ e } data-testid={ `${index}-ingredient-name-and-measure` }>
              {drinkDetails[e]}
              {' '}
              -
              {drinkDetails[`strMeasure${e.match(/\d+/)[0]}`]}
            </li>
          ) : null))}
        </ul>
        <span>Instructions</span>
        <section data-testid="instructions">{strInstructions}</section>
        <Carousel detailType="BebidasDetalhes" />
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

export default BebidasDetalhes;

BebidasDetalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
