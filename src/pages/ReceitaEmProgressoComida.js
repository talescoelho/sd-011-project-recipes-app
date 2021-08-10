import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ReceitaEmProgressoComida extends Component {
  constructor() {
    super();
    this.state = {
      meals: [],
      finalList: [],
      disabled: true,
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.CopyToClipboard = this.CopyToClipboard.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  handleChange() {
    // Retirado https://stackoverflow.com/questions/14800954/how-to-check-if-all-checkboxes-are-unchecked
    if (document.querySelectorAll('input[type="checkbox"]:checked').length
    === document.querySelectorAll('input[type="checkbox"]').length) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  CopyToClipboard() { // https://orclqa.com/copy-url-clipboard/
    const inputc = document.body.appendChild(document.createElement('input'));
    inputc.value = window.location.href;
    inputc.focus();
    inputc.select();
    document.execCommand('copy');
    inputc.parentNode.removeChild(inputc);
    alert('Link copiado!');
  }

  async fetchAPI() {
    const { match: { params: { id } } } = this.props;
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
      meals: data.meals[0],
      ingredientList: ingredientListBuffer,
    }, () => {
      const { ingredientList, meals } = this.state;
      const doneList = ingredientList.map((e) => (meals[e]
        ? `${meals[e]} - ${meals[`strMeasure${e.match(/\d+/)[0]}`]}`
        : null)).filter(Boolean);
      this.setState({
        finalList: doneList,
      });
    });
  }

  render() {
    const { meals: { strMealThumb, strMeal,
      strInstructions, strCategory }, finalList, disabled } = this.state;
    return (
      <main>
        <img src={ strMealThumb } data-testid="recipe-photo" alt="imagem-da-receita" />
        <h1 data-testid="recipe-title">{ strMeal }</h1>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => this.CopyToClipboard() }
        >
          Compartilhar
        </button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <h2 data-testid="recipe-category">{ strCategory }</h2>
        <form onChange={ this.handleChange }>
          <ul>
            {finalList.map((ing, index) => (
              <li key={ ing } data-testid={ `${index}-ingredient-step` }>
                <span>
                  <input type="checkbox" name={ ing } />
                </span>
                <span>{ing}</span>
              </li>
            ))}
          </ul>
          <p data-testid="instructions">{strInstructions}</p>
          <Link to="/receitas-feitas">
            <button
              type="button"
              data-testid="finish-recipe-btn"
              disabled={ disabled }
            >
              Finalizar receita
            </button>
          </Link>
        </form>
      </main>
    );
  }
}

export default ReceitaEmProgressoComida;

ReceitaEmProgressoComida.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
}.isRequired;
