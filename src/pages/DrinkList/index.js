import React from 'react';
import { connect } from 'react-redux';
import FooterMenu from '../../components/FooterMenu';
import Header from '../../components/Header';

const DrinkList = ({ receiveData, fetched }) => (
  <div>
    <Header />
    { fetched && receiveData ? receiveData.drinks
      .map((drink, index) => (
        <div key={ index }>
          <h2 data-testid={ `${index}-card-name` }>{ drink.strDrink }</h2>
          <img
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
            data-testid={ `${index}-card-img` }
          />
          <p data-testid={ `${index}-recipe-card` }>{ drink.strInstructions }</p>
        </div>
      )) : <p>teste</p> }
    <FooterMenu />
  </div>
);

const mapStateToProps = (state) => ({
  receiveData: state.searchBarReducer.receiveData,
  fetched: state.searchBarReducer.fetched,
});

export default connect(mapStateToProps)(DrinkList);
