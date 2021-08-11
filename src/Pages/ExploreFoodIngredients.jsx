import React, { Component } from 'react';
import FooterMenu from '../Components/FooterMenu';
import HeaderWithoutSearch from '../Components/HeaderWithoutSearch';

export default class ExploreFoodIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
    };

    this.renderIngredientsAPI = this.renderIngredientsAPI.bind(this);
  }

  componentDidMount() {
    this.renderIngredientsAPI();
  }

  renderIngredientsAPI() {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((result) => result.json())
      .then((response) => this.setState({ ingredients: response.meals }));
  }

  render() {
    const { ingredients } = this.state;
    const magicNUMBER = 12;
    return (
      <div>
        <HeaderWithoutSearch title="Explorar Ingredientes" />
        { ingredients && (
          ingredients.map((item, index) => (
            index < magicNUMBER && (
              <div
                className="cardRecipesContainer"
                data-testid={ `${index}-ingredient-card` }
                key={ index }
              >
                <img
                  src={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` }
                  alt={ `${item.strIngredient}` }
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>
                  { item.strIngredient }
                </p>
              </div>
            )
          ))
        )}
        <FooterMenu />
      </div>
    );
  }
}
