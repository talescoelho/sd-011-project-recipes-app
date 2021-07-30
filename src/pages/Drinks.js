import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';

function Drinks(props) {
  const { receiveData } = props;
  return (
    <>
      <SearchBar />
      <h2>Pagina de Bebidas</h2>
      {/* { receiveData.meals.length === 1 ? <Redirect
        to={ `/comidas/${receiveData.drinks.idDrinks}` }
      /> : (
        <div>
          Teste Bebidas
        </div>
      )} */}
    </>
  );
}

const mapStateToProps = (state) => ({
  receiveData: state.searchBarReducer.receiveData,
});

export default connect(mapStateToProps)(Drinks);
