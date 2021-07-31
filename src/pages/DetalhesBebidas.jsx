import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

class DetalhesBebidas extends Component {
  constructor() {
    super();
    this.state = {
      cocktail: {},
    };

    this.fetchIdDrink = this.fetchIdDrink.bind(this);
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
      .then((response) => this.setState({
        cocktail: response,
      }));
  }

  render() {
    const { cocktail } = this.state;
    const { drinks } = cocktail;
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
    const obj = ['str', 'str1', 'str2'];
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
          { obj.map((value, index) => (
            <p
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              { value }
            </p>))}
          <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
        </div>
      </div>
    );
  }
}

export default DetalhesBebidas;

DetalhesBebidas.propTypes = {
  history: PropTypes.oneOfType.isRequired,
};
