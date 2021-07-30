import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Cards extends React.Component {
  renderCards(itemsToRender, foodOrDrink) {
    const filteredElevenItems = [];
    const finalIndex = 12;
    if (itemsToRender === null) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    } else {
      itemsToRender.forEach((item, index) => {
        if (index < finalIndex) {
          filteredElevenItems.push(item);
        }
      });
      if (foodOrDrink === 'food') {
        if (filteredElevenItems.length === 1) {
          return <Redirect to={ `/comidas/${filteredElevenItems[0].idMeal}` } />;
        }
        return filteredElevenItems.map((item, index) => (
          <div
            data-testid={ `${index}-recipe-card` }
            key={ item.idMeal }
            style={ { margin: '10px' } }
          >
            <h3 data-testid={ `${index}-card-name` }>{ item.strMeal }</h3>
            <img
              data-testid={ `${index}-card-img` }
              src={ item.strMealThumb }
              alt="food card"
              width="50px"
            />
          </div>
        ));
      }
      if (filteredElevenItems.length === 1) {
        return <Redirect to={ `/bebidas/${filteredElevenItems[0].idDrink}` } />;
      }
      return filteredElevenItems.map((item, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ item.idDrink }
          style={ { margin: '10px' } }
        >
          <h3 data-testid={ `${index}-card-name` }>{ item.strDrink }</h3>
          <img
            data-testid={ `${index}-card-img` }
            src={ item.strDrinkThumb }
            alt="food card"
            width="50px"
          />
        </div>
      ));
    }
  }

  render() {
    const { itemsToRender, typeFood } = this.props;
    return (
      <div style={ { display: 'flex' } }>
        {this.renderCards(itemsToRender, typeFood)}
      </div>
    );
  }
}

Cards.propTypes = {
  itemsToRender: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  typeFood: PropTypes.string.isRequired,
};

export default connect()(Cards);
