import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Cards extends React.Component {
  renderCards(itemsToRender, foodOrDrink) {
    const { renderOneOrNot } = this.props;
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
        if (filteredElevenItems.length === 1 && renderOneOrNot) {
          return <Redirect to={ `/comidas/${filteredElevenItems[0].idMeal}` } />;
        }

        return filteredElevenItems.map((item, index) => (
          <Link to={ `/comidas/${item.idMeal}` } key={ item.idMeal }>
            <div
              data-testid={ `${index}-recipe-card` }
              style={ { margin: '10px', width: '50px' } }
            >
              <p data-testid={ `${index}-card-name` }>{ item.strMeal }</p>
              <img
                data-testid={ `${index}-card-img` }
                src={ item.strMealThumb }
                alt="food card"
                width="49px"
              />
            </div>
          </Link>
        ));
      }

      if (filteredElevenItems.length === 1 && renderOneOrNot) {
        return <Redirect to={ `/bebidas/${filteredElevenItems[0].idDrink}` } />;
      }
      return filteredElevenItems.map((item, index) => (
        <Link to={ `/bebidas/${item.idDrink}` } key={ item.idDrink }>
          <div
            data-testid={ `${index}-recipe-card` }
            style={ { margin: '10px', width: '50px' } }
          >
            <p data-testid={ `${index}-card-name` }>{ item.strDrink }</p>
            <img
              data-testid={ `${index}-card-img` }
              src={ item.strDrinkThumb }
              alt="food card"
              width="50px"
            />
          </div>
        </Link>
      ));
    }
  }

  render() {
    const { itemsToRender, typeFood } = this.props;
    return (
      <div style={ { display: 'flex', flexWrap: 'wrap' } }>
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
  renderOneOrNot: PropTypes.bool.isRequired,
};

export default connect()(Cards);
