import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as api from '../services/API';

class Bebidas extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Bebidas',
      drinks: [],
      isFetchDone: false,
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const getAPI = await api.fetchAPIDrinkList();
    this.setState({
      drinks: getAPI,
      isFetchDone: true,
    });
  }

  render() {
    const { title, drinks, isFetchDone } = this.state;
    const elements = 12;
    return (
      <main>
        Bebidas
        <Header title={ title } />
        { isFetchDone === false ? <div>Carregando...</div> : (
          <div>
            { drinks.slice(0, elements).map((recipe, index) => (
              <div key={ index } data-testid={ `${index}-recipe-card` }>
                <img
                  src={ recipe.strDrinkThumb }
                  data-testid={ `${index}-card-img` }
                  alt="Imagem da receita"
                />
                <p data-testid={ `${index}-card-name` }>{recipe.strDrink}</p>
              </div>
            ))}
          </div>
        )}
        <Footer />
      </main>
    );
  }
}

export default Bebidas;
