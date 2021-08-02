import React from 'react';
import { connect } from 'react-redux';
import FooterMenu from '../../components/FooterMenu';
import Header from '../../components/Header';

const DrinkList = ({ receiveData, fetched }) => {
  const renderReceiveDataDrinks = () => {
    const maxRender = 12;
    if (receiveData && receiveData.drinks !== null) {
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
    if (receiveData.drinks === null) {
      // eslint-disable-next-line no-alert
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  };

  return (
    <div>
      <Header />
      { fetched && receiveData ? <div>{ renderReceiveDataDrinks() }</div>
        : <p>Pesquise por uma bebida.</p> }
      <FooterMenu />
    </div>
  );
};

const mapStateToProps = (state) => ({
  receiveData: state.searchBarReducer.receiveData,
  fetched: state.searchBarReducer.fetched,
});

export default connect(mapStateToProps)(DrinkList);

DrinkList.propTypes = {
  receiveData: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  drinks: PropTypes.objectOf(PropTypes.string).isRequired,
};
