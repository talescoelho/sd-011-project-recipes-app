import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DrinkCards extends Component {
  render() {
    const { drinkCardsList, drinkRecomendations, recomendation } = this.props;
    let list = drinkCardsList;
    if (recomendation === true) {
      list = [...drinkRecomendations];
    }
    return (
      <ul>
        { list.map((item, index) => (
          <li key={ item.idDrink } data-testid={ `${index}-recipe-card` }>
            <Link to={ `/bebidas/${item.idDrink}` }>
              <img
                height="200px"
                width="200px"
                data-testid={ `${index}-card-img` }
                src={ item.strDrinkThumb }
                alt="Imagem da bebida pronta"
              />
              <h3 data-testid={ `${index}-card-name` }>{ item.strDrink }</h3>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  drinkCardsList: state.drinkReducer.drinkCardsList,
  drinkRecomendations: state.foodReducer.drinkRecomendations,
});

DrinkCards.propTypes = {
  drinkCardsList: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(DrinkCards);
