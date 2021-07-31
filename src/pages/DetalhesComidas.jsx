import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

class DetalhesComidas extends Component {
  constructor() {
    super();
    this.state = {
      food: {},
    };

    this.fetchIdMeal = this.fetchIdMeal.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    const { location } = history;
    const { pathname } = location;
    this.fetchIdMeal(pathname.split('/')[2]);
  }

  fetchIdMeal(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((data) => data.json())
      .then((response) => this.setState({
        food: response,
      }));
  }

  render() {
    const { food } = this.state;
    const { meals } = food;
    if (!meals) {
      return <p>Carregando</p>;
    }
    const { strMealThumb, strMeal, strCategory, strInstructions, strYoutube } = meals[0];
    const ingredientes = Object.keys(meals[0]);
    const filtrados = ingredientes.filter((value) => value.includes('strIngredient'));
    const values = filtrados.map((value) => meals[0][value]);
    const onlyIngredientes = values.filter((value) => value);
    const filtradosMeasure = ingredientes.filter((value) => value.includes('strMeasure'));
    const valuesMeasure = filtradosMeasure.map((value) => meals[0][value]);
    const onlyMeasures = valuesMeasure.filter((value) => value);
    const obj = ['str', 'str1', 'str2'];
    return (
      <div>
        Detalhes de comidas
        <div>
          <img
            data-testid="recipe-photo"
            src={ strMealThumb }
            alt={ strMeal }
            style={ { width: '100px' } }
          />
        </div>
        <div>
          <h3 data-testid="recipe-title">{ strMeal }</h3>
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
          <p data-testid="recipe-category">{ strCategory }</p>
          <p>Ingredientes:</p>
          { onlyIngredientes.map((value, index) => (
            <p
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {`${value} - ${onlyMeasures[index]}`}
            </p>)) }
          <p data-testid="instructions">{ strInstructions }</p>
          <iframe
            src={ strYoutube }
            height="200"
            width="300"
            title={ strMeal }
            data-testid="video"
          />
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

export default DetalhesComidas;

DetalhesComidas.propTypes = {
  history: PropTypes.oneOfType.isRequired,
};
