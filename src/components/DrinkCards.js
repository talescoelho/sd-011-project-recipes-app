import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DrinkCards extends Component {
  render() {
    const { drinkCardsList } = this.props;
    console.log(drinkCardsList);
    return (
      <ul>
        { drinkCardsList.map((item, index) => (
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
});

DrinkCards.propTypes = {
  drinkCardsList: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(DrinkCards);
