import React, { useState } from 'react';
import { connect } from 'react-redux';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [radioInput, setRadioInput] = useState('');

  const handleClick = () => {
    console.log(`https://www.themealdb.com/api/json/v1/1/${radioInput === 'ingredient' ? 'filter' : 'search'}.php?${radioInput === 'ingredient' ? 'i' : ''}${radioInput === 'name' ? 's' : ''}${radioInput === 'firstLetter' ? 'f' : ''}=${searchInput}`);
  };

  return (
    <form>
      Search Bar
      <label htmlFor="search-input">
        <input
          placeholder="Buscar Receita"
          data-testid="search-input"
          onChange={ ({ target: { value } }) => setSearchInput(value) }
        />
      </label>
      <label htmlFor="radio-options">
        Ingrediente
        <input
          name="radio-options"
          type="radio"
          data-testid="ingredient-search-radio"
          onChange={ () => setRadioInput('ingredient') }
        />
        Nome
        <input
          name="radio-options"
          type="radio"
          data-testid="name-search-radio"
          onChange={ () => setRadioInput('name') }
        />
        Primeira letra
        <input
          name="radio-options"
          type="radio"
          data-testid="first-letter-search-radio"
          onChange={ () => setRadioInput('firstLetter') }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </form>
  );
}

// const mapStateToProps = (state) => ({
//   teste: state.RecipesReducer.teste,
// });

// const mapDispatchToProps = (dispatch) => ({
//   logoff: () => dispatch(logoffAction())
// })

export default connect(null, null)(SearchBar);
