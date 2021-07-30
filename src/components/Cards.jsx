import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Cards extends React.Component {
  renderCards(itemsToRender, foodOrDrink) {
    const filteredElevenItems = [];
    const finalIndex = 11;
    itemsToRender.forEach((item, index) => {
      if (index < finalIndex) {
        filteredElevenItems.push(item);
      }
    });

    if (foodOrDrink === 'food') {
      return filteredElevenItems.map((item) => (
        <div key={ item.idMeal } style={ { margin: '10px' } }>
          <h3>{ item.strMeal }</h3>
          <img src={ item.strMealThumb } alt="food card" width="50px" />
        </div>
      ));
    }
    return filteredElevenItems.map((item) => (
      <div key={ item.idDrink } style={ { margin: '10px' } }>
        <h3>{ item.strDrink }</h3>
        <img src={ item.strDrinkThumb } alt="food card" width="50px" />
      </div>
    ));
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
