import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import FetchApi from '../services/ApiFetch';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';

class DrinksRecipiesInProcess extends React.Component {
  constructor(props) {
    super(props);
    let recoveredInfo = [];
    const { match: { params: { id } } } = this.props;
    if (localStorage.inProgressRecipes
      && JSON.parse(localStorage.inProgressRecipes).cocktails[id]) {
      recoveredInfo = JSON.parse(localStorage.inProgressRecipes).cocktails[id];
    }
    this.state = {
      DoRecipe: [],
      componentMounted: false,
      stockDrinks: recoveredInfo,
      redirectToDoneRecipe: false,
      disabledButton: true,
      ingredientState: [],
    };
    this.test = this.test.bind(this);
    this.inputOnClickHandler = this.inputOnClickHandler.bind(this);
    this.onclickFinishButton = this.onclickFinishButton.bind(this);
  }

  componentDidMount() {
    this.test();
  }

  onclickFinishButton() {
    this.setState({ redirectToDoneRecipe: true });
  }

  async test() {
    const { match: { params: { id } } } = this.props;
    const obj = await FetchApi('thecocktaildb', null, null, ['details', id]);
    this.setState({
      DoRecipe: obj,
      componentMounted: true,
    });
  }

  inputOnClickHandler(event, name) {
    const { match: { params: { id } } } = this.props;
    const { stockDrinks, ingredientState, DoRecipe } = this.state;
    let filter = [];
    const ingredientKeys = Object.entries(DoRecipe.drinks[0])
      .filter((igredients) => igredients[0]
        .includes('strIngredient') && igredients[1]);
    this.setState({ ingredientState: ingredientKeys });
    if (stockDrinks.some((i) => i === name)) {
      filter = stockDrinks.filter((ell) => ell !== name);
    } else {
      filter = [...stockDrinks, name];
    }
    this.setState({
      stockDrinks: filter,
    }, () => {
      const { stockDrinks: newStockDrinks } = this.state;
      let prev2 = {};
      if (localStorage.inProgressRecipes
        && JSON.parse(localStorage.inProgressRecipes).meals) {
        prev2 = JSON.parse(localStorage.inProgressRecipes).meals;
      }
      const drinks2 = {
        cocktails: {
          [id]: newStockDrinks,
        },
        meals: prev2,
      };
      if (localStorage.inProgressRecipes
        && JSON.parse(localStorage.inProgressRecipes).cocktails) {
        const prev = JSON.parse(localStorage.inProgressRecipes);
        const drinks = {
          cocktails: {
            ...prev.cocktails,
            [id]: newStockDrinks,
          },
          meals: prev2,
        };
        localStorage.inProgressRecipes = JSON.stringify(drinks);
        if (JSON.parse(localStorage.inProgressRecipes).cocktails[id].length
                === ingredientState.length) {
          this.setState({ disabledButton: false });
        } else {
          this.setState({ disabledButton: true });
        }
      } else { localStorage.inProgressRecipes = JSON.stringify(drinks2); }
    });
    event.target.parentNode.classList.toggle('do-row');
  }

  renderAll() {
    const { DoRecipe, disabledButton } = this.state;
    let ri = [];
    const { match: { params: { id } } } = this.props;
    if (localStorage.inProgressRecipes
      && JSON.parse(localStorage.inProgressRecipes).cocktails[id]) {
      ri = JSON.parse(localStorage.inProgressRecipes).cocktails[id];
    }
    return (
      <div>
        <img
          src={ DoRecipe.drinks[0].strDrinkThumb }
          alt={ DoRecipe.drinks[0].strDrink }
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{ DoRecipe.drinks[0].strDrink }</h1>
        <ShareBtn />
        <FavoriteBtn />
        <p data-testid="recipe-category">{ DoRecipe.drinks[0].strCategory }</p>
        <div className="ul-container">
          <ul id="input-checkbox">
            { Object.entries(DoRecipe.drinks[0])
              .filter((igredients) => igredients[0]
                .includes('strIngredient') && igredients[1])
              .map((e, index) => (
                <li
                  id={ index }
                  data-testid={ `${index}-ingredient-step` }
                  key={ index }
                >
                  <label
                    className={ ri.some((item) => item === e[1]) ? 'do-row' : '' }
                    id={ `id1${index}` }
                    htmlFor={ `for${index}` }
                  >
                    {e[1]}
                    <input
                      defaultChecked={ ri.some((item) => item === e[1]) }
                      id={ `for${index}` }
                      type="checkbox"
                      value={ `${e[1]}checked` }
                      onClick={ (event) => this.inputOnClickHandler(event, e[1]) }
                    />
                  </label>
                </li>
              )) }
          </ul>
        </div>
        <p data-testid="instructions">
          { DoRecipe.drinks[0].strInstructions }
        </p>
        <button
          disabled={ disabledButton }
          data-testid="finish-recipe-btn"
          onClick={ this.onclickFinishButton }
          type="button"
        >
          Finalizar
        </button>
      </div>
    );
  }

  render() {
    const { componentMounted, redirectToDoneRecipe } = this.state;
    if (redirectToDoneRecipe) return <Redirect to="/receitas-feitas" />;
    return (
      <div>
        {componentMounted ? this.renderAll() : 'loading...'}
      </div>
    );
  }
}
export default DrinksRecipiesInProcess;

DrinksRecipiesInProcess.propTypes = {
  match: PropTypes.shape(Object).isRequired,
};
