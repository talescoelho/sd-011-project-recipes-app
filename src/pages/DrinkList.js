import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RenderDrinks from './RenderDrinks';
import RenderDrinksCategoriesBtn from './RenderDrinksCategoriesBtn';

const DrinkList = ({ receiveData, isFetching }) => {
  document.title = 'Bebidas';

  const renderFilteredReceiveDataDrinks = () => {
    const maxRender = 12;
    if (receiveData.drinks === null) {
      // eslint-disable-next-line no-alert
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
    if (receiveData.drinks && !isFetching && receiveData.drinks !== null) {
      const filteredData = receiveData.drinks.filter((item, index) => index < maxRender);
      return (
        <div>
          { filteredData
            .map((drink, index) => (
              <div key={ index }>
                <h2 data-testid={ `${index}-card-name` }>{ drink.strDrink }</h2>
                <img
                  src={ drink.strDrinkThumb }
                  alt={ drink.strDrink }
                  data-testid={ `${index}-card-img` }
                />
                <h3 data-testid={ `${index}-recipe-card` }>{ drink.strInstructions }</h3>
              </div>))}
        </div>
      );
    }
  };

  return (
    <div>
      <Header />
      <RenderDrinksCategoriesBtn />
      { receiveData.length < 1 || !receiveData.drinks ? <RenderDrinks />
        : <div>{ renderFilteredReceiveDataDrinks() }</div> }
      <FooterMenu />
    </div>
  );
};

DrinkList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  receiveData: PropTypes.shape({
    drinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  receiveData: state.searchBarReducer.receiveData,
  isFetching: state.searchBarReducer.isFetching,
});

export default connect(mapStateToProps)(DrinkList);

DrinkList.defaultProps = {
  drinks: {},
};

DrinkList.propTypes = {
  receiveData: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  drinks: PropTypes.objectOf(PropTypes.string),
};
