import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  fetchSearchIngredients,
  fetchSearchName,
  fetchSearchFirstLetter } from '../../redux/actions/searchBarActions';
import Input from '../Input';

function HeaderSearchBar(props) {
  const [searchInput, setSearchInput] = useState('');
  const [radioValue, setRadioValue] = useState('Ingrediente');
  const [searchDataType, setSearchDataType] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    const type = pathname === '/bebidas' ? 'drinks' : 'meals';
    setSearchDataType(type);
  }, [pathname]);

  const fetchSearchData = async () => {
    const { searchByIngredients, searchByName, searchByFirstLetter } = props;
    let receiveData;

    if (radioValue === 'Ingrediente') {
      receiveData = await searchByIngredients(searchInput, pathname);
    } else if (radioValue === 'Nome') {
      receiveData = await searchByName(searchInput, pathname);
    } else {
      receiveData = await searchByFirstLetter(searchInput, pathname);
    }
    if (receiveData) {
      setSearchDataType(receiveData[searchDataType]);
    }
  };

  return (
    <>
      <Input
        id="searchInput"
        name="searchInput"
        label="Buscar receita:"
        data-testid="search-input"
        value={ searchInput }
        setValue={ setSearchInput }
      />
      <Input
        id="ingredientInput"
        label="Ingrediente"
        name="radioInput"
        type="radio"
        data-testid="ingredient-search-radio"
        value="Ingrediente"
        setValue={ setRadioValue }
      />
      <Input
        id="nameInput"
        label="Nome"
        name="radioInput"
        type="radio"
        data-testid="name-search-radio"
        value="Nome"
        setValue={ setRadioValue }
      />
      <Input
        id="firstLetterInput"
        label="Primeira Letra"
        name="radioInput"
        type="radio"
        data-testid="first-letter-search-radio"
        value="Primeira Letra"
        setValue={ setRadioValue }
      />
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ fetchSearchData }
      >
        Buscar
      </button>
    </>
  );
}

const mapStateToProps = (state) => ({
  receiveData: state.searchBarReducer.receiveData,
});

const mapDispatchToProps = (dispatch) => ({
  searchByIngredients: (searchIngredient,
    pathname) => dispatch(fetchSearchIngredients(searchIngredient, pathname)),
  searchByName: (searchName,
    pathname) => dispatch(fetchSearchName(searchName, pathname)),
  searchByFirstLetter: (searchFirstLetter,
    pathname) => dispatch(fetchSearchFirstLetter(searchFirstLetter, pathname)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearchBar);

HeaderSearchBar.propTypes = {
  searchByIngredients: PropTypes.func.isRequired,
  searchByName: PropTypes.func.isRequired,
  searchByFirstLetter: PropTypes.func.isRequired,
};
