import React from 'react';
import FetchApi from '../services/ApiFetch';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';

class DrinksRecipiesInProcess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DoRecipe: [],
      componentMounted: false,
    };
    this.test = this.test.bind(this);
    this.changeRow = this.changeRow.bind(this);
    this.renderAll = this.renderAll.bind(this);
  }

  componentDidMount() {
    this.test();
  }

  componentDidUpdate() {
    if (localStorage.inProgressRecipes) {
      const { match: { params: { id } } } = this.props;
      const recoveredInfo = JSON.parse(localStorage.inProgressRecipes);
      const ote = Object.entries(recoveredInfo);

      console.log(ote);
      // console.log(recoveredInfo);
    }
  }

  async test() {
    const { match: { params: { id } } } = this.props;
    const obj = await FetchApi('thecocktaildb', null, null, ['details', id]);
    this.setState({
      DoRecipe: obj,
      componentMounted: true,
    });
  }

  changeRow(event, index) {
    const { stockDrinks } = this.state;
    let filter = [];
    if (stockDrinks.some((i) => i === index)) {
      filter = stockDrinks.filter((ell) => ell !== index);
    } else {
      filter = [...stockDrinks, index];
    }
    this.setState({
      stockDrinks: filter,
    }, () => {
      const { stockDrinks: newStockDrinks } = this.state;
      const { match: { params: { id } } } = this.props;
      const drinks = {
        cocktails: {
          [id]: newStockDrinks,
        },
      };
      if (localStorage.inProgressRecipes) {
        if (JSON.parse(localStorage.inProgressRecipes).cocktails) {
          const prev = JSON.parse(localStorage.inProgressRecipes).cocktails;
          console.log(prev)
          localStorage.inProgressRecipes = JSON.stringify(...prev, drinks.cocktails);
        }
      } else { localStorage.inProgressRecipes = JSON.stringify(drinks); }
    });
    event.target.parentNode.classList.toggle('do-row');
  }

  renderAll() {
    const { DoRecipe } = this.state;
    return (
      <div>
        <h1 data-testid="recipe-title">{ DoRecipe.drinks[0].strDrink }</h1>
        <img
          src={ DoRecipe.drinks[0].strDrinkThumb }
          alt={ DoRecipe.drinks[0].strDrink }
          data-testid="recipe-photo"
        />
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
                  // className={}
                  data-testid={ `${index}-ingredient-step` }
                  key={ index }
                >
                  <label
                    className="li-test"
                    id={ `id1${index}` }
                    htmlFor={ `for${index}` }
                  >
                    {e[1]}
                    <input
                      id={ `for${index}` }
                      type="checkbox"
                      onClick={ (event) => this.changeRow(event, index) }
                    />
                  </label>
                </li>
              )) }
          </ul>
        </div>
        <p data-testid="instructions">
          { DoRecipe.drinks[0].strInstructions }
        </p>
        <button data-testid="finish-recipe-btn" type="button">Finalizar</button>
      </div>
    );
  }

  render() {
    const { componentMounted } = this.state;
    return (
      <div>
        {componentMounted ? this.renderAll() : 'loading...'}
      </div>
    );
  }
}
export default DrinksRecipiesInProcess;
