import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import * as api from '../services/API';

class ExplorarBebidasIngredientes extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Explorar Ingredientes',
      lupa: 'desligada',
      Ingredients: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const getAPI = await api.fetchAPIDrinksIngredients();
    getAPI.length = 12;
    this.setState({
      Ingredients: getAPI,
      // isFetchDone: true,
    });
  }

  render() {
    const { title, lupa, Ingredients } = this.state;
    // const title = 'Explorar Ingredientes';
    // const lupa = 'desligada';
    return (
      <main>
        <Header
          title={ title }
          lupa={ lupa }
        />
        {Ingredients.map((Ingredient, index) => (
          <div key={ index } data-testid={ `${index}-ingredient-card` }>
            {/* <Link to={ `/comidas/${recipe.idMeal}` }> */}
            <Link to="/comidas/">
              <img
                className="photo"
                src={ `https://www.thecocktaildb.com/images/ingredients/${Ingredient.strIngredient1}-Small.png` }
                data-testid={ `${index}-card-img` }
                alt="Imagem da receita"
              />
              <p data-testid={ `${index}-card-name` }>{Ingredient.strIngredient1}</p>
            </Link>
          </div>

        ))}
        <Footer />
      </main>
    );
  }
}

export default ExplorarBebidasIngredientes;
