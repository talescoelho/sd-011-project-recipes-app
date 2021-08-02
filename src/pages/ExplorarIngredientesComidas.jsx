import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFoodFromApi } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ExplorarIngredientesComidas extends Component {
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

  async filterPerIngredient(ingredient) {
    const { filterRecipes, history } = this.props;
    await filterRecipes(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    history.push('/comidas');
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
      <div
        onClick={ () => this.filterPerIngredient(item.strIngredient) }
        onKeyDown={ () => this.filterPerIngredient(item.strIngredient) }
        data-testid={ `${index}-ingredient-card` }
        key={ item.idIngredient }
        role="button"
        tabIndex="0"
      >
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

const mapDispatchToProps = (dispatch) => ({
  filterRecipes: (url) => dispatch(getFoodFromApi(url)),
});

ExplorarIngredientesComidas.propTypes = {
  filterRecipes: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect(null, mapDispatchToProps)(ExplorarIngredientesComidas);
