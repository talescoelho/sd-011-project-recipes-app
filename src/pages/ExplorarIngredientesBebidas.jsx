import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class ExplorarIngredientesBebidas extends Component {
  constructor() {
    super();
    this.state = ({
      itemsToRender: [],
    });
  }

  componentDidMount() {
    this.fetchIngredients();
  }

  async fetchIngredients() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const responseJson = await response.json();
    this.setState({
      itemsToRender: responseJson.drinks,
    });
  }

  renderIngredientsCards() {
    const { itemsToRender } = this.state;
    const filteredElevenItems = [];
    const finalIndex = 12;
    itemsToRender.forEach((item, index) => {
      if (index < finalIndex) {
        filteredElevenItems.push(item);
      }
    });

    return filteredElevenItems.map((item, index) => (
      <div data-testid={ `${index}-ingredient-card` } key={ index }>
        <p data-testid={ `${index}-card-name` }>{ item.strIngredient1 }</p>
        <img data-testid={ `${index}-card-img` } src={ `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png` } style={ { width: '80px' } } alt="imagem comida" />
      </div>
    ));
  }

  render() {
    return (
      <div>
        <Header title="Explorar Ingredientes" />
        <div style={ { display: 'flex' } }>
          { this.renderIngredientsCards() }
        </div>
        <Footer />
      </div>
    );
  }
}
