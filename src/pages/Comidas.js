import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as api from '../services/API';

class Comidas extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Comidas',
      meals: [],
      isFetchDone: false,
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const getAPI = await api.fetchAPIFoodList();
    this.setState({
      meals: getAPI,
      isFetchDone: true,
    });
  }

  render() {
    const { title, meals, isFetchDone } = this.state;
    const elements = 12;
    return (
      <main>
        <Header title={ title } />
        { isFetchDone === false ? <div>Carregando...</div> : (
          <div>
            { meals.slice(0, elements).map((recipe, index) => (
              <div key={ index } data-testid={ `${index}-recipe-card` }>
                <img
                  src={ recipe.strMealThumb }
                  data-testid={ `${index}-card-img` }
                  alt="Imagem da receita"
                />
                <p data-testid={ `${index}-card-name` }>{recipe.strMeal}</p>
              </div>
            ))}
          </div>
        )}
        ;
        <Footer />
      </main>
    );
  }
}

export default Comidas;
