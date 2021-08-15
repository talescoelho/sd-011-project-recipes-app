import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import FetchApi from '../services/ApiFetch';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';

class FoodsRecipiesInProcess extends React.Component {
  constructor(props) {
    super(props);
    let recoveredInfo = [];
    const { match: { params: { id } } } = this.props;
    if (localStorage.inProgressRecipes
      && JSON.parse(localStorage.inProgressRecipes).meals[id]) {
      recoveredInfo = JSON.parse(localStorage.inProgressRecipes).meals[id];
    }
    this.state = {
      DoRecipe: [],
      componentMounted: false,
      stockFoods: recoveredInfo,
      redirectToDoneRecipe: false,
      disabledButton: true,
      ingredientState: [],
    };
    this.test = this.test.bind(this);
    this.changeRow = this.changeRow.bind(this);
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
    const obj = await FetchApi('themealdb', null, null, ['details', id]);
    this.setState({
      DoRecipe: obj,
      componentMounted: true,
    });
  }

  changeRow(event, name) {
    const { match: { params: { id } } } = this.props;
    const { stockFoods, DoRecipe, ingredientState } = this.state;
    const ingredientKeys = Object.entries(DoRecipe.meals[0])
      .filter((igredients) => igredients[0]
        .includes('strIngredient') && igredients[1]);
    console.log(ingredientKeys);
    this.setState({ ingredientState: ingredientKeys });
    let filter = [];
    if (stockFoods.some((i) => i === name)) {
      filter = stockFoods.filter((ell) => ell !== name);
    } else {
      filter = [...stockFoods, name];
    }
    this.setState({
      stockFoods: filter,
    }, () => {
      const { stockFoods: newStockFoods } = this.state;
      let prev2 = {};
      if (localStorage.inProgressRecipes
        && JSON.parse(localStorage.inProgressRecipes).cocktails) {
        prev2 = JSON.parse(localStorage.inProgressRecipes).cocktails;
      }
      const foods2 = {
        meals: {
          [id]: newStockFoods,
        },
        cocktails: prev2,
      };
      if (localStorage.inProgressRecipes
        && JSON.parse(localStorage.inProgressRecipes).meals) {
        const prev = JSON.parse(localStorage.inProgressRecipes);
        const foods = {
          meals: {
            ...prev.meals,
            [id]: newStockFoods,
          },
          cocktails: prev2,
        };
        localStorage.inProgressRecipes = JSON.stringify(foods);
        if (JSON.parse(localStorage.inProgressRecipes).meals[id].length
        === ingredientState.length) {
          this.setState({ disabledButton: false });
        } else {
          this.setState({ disabledButton: true });
        }
      } else { localStorage.inProgressRecipes = JSON.stringify(foods2); }
    });
    event.target.parentNode.classList.toggle('do-row');
  }

  renderAll() {
    const { DoRecipe, disabledButton } = this.state;
    let ri = [];
    const { match: { params: { id } } } = this.props;
    if (localStorage.inProgressRecipes
      && JSON.parse(localStorage.inProgressRecipes).meals[id]) {
      ri = JSON.parse(localStorage.inProgressRecipes).meals[id];
    }
    return (
      <div>
        <img
          src={ DoRecipe.meals[0].strMealThumb }
          alt={ DoRecipe.meals[0].strMeal }
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{ DoRecipe.meals[0].strDrink }</h1>
        <ShareBtn />
        <FavoriteBtn details={ DoRecipe.meals } gatilho="meal" id={ id } />
        <p data-testid="recipe-category">{ DoRecipe.meals[0].strCategory }</p>
        <div className="ul-container">
          <ul id="input-checkbox">
            { Object.entries(DoRecipe.meals[0])
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
                      onClick={ (event) => this.changeRow(event, e[1]) }
                    />
                  </label>
                </li>
              )) }
          </ul>
        </div>
        <p data-testid="instructions">
          { DoRecipe.meals[0].strInstructions }
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

export default FoodsRecipiesInProcess;

FoodsRecipiesInProcess.propTypes = {
  match: PropTypes.shape(Object).isRequired,
};
