import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function Meals(props) {
  const { receiveData } = props;
  return (
    <>
      <SearchBar />
      <h2>Pagina de Comidas</h2>
      {/* { receiveData.meals.length === 1 ? <Redirect
        to={ `/comidas/${receiveData.meals.idMeal}` }
      /> : (
        <div>
          teste comidas
        </div>
      )} */}
    </>
  );
}

const mapStateToProps = (state) => ({
  receiveData: state.searchBarReducer.receiveData,
});

export default connect(mapStateToProps)(Meals);
