import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class ExplorarIngredientesComidas extends Component {
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
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const responseJson = await response.json();
    this.setState({
      itemsToRender: responseJson.meals,
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
      <div data-testid={ `${index}-ingredient-card` } key={ item.idIngredient }>
        <p data-testid={ `${index}-card-name` }>{ item.strIngredient }</p>
        <img data-testid={ `${index}-card-img` } src={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` } style={ { width: '80px' } } alt="imagem comida" />
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

// https://www.themealdb.com/images/ingredients/{nome-do-ingrediente}.png
