import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

function SearchBar(props) {
  const [searchRadio, setSearchRadio] = useState(null);
  const [input, setInput] = useState('');

  function handleInputChange({ target: { value } }) {
    setInput(value);
  }

  function handleSearchRadio({ target: { value } }) {
    setSearchRadio(value);
  }

  const FIRST_LETTER = 'first-letter';
  function handleOnClickButton() {
    if (props.mode === 'comidas') {

      if (searchRadio === 'ingredient') {
        props.foodRecipesByIngredient(input);
      } else if (searchRadio === 'name') {
        props.foodRecipesByName(input);
      } else if (searchRadio === FIRST_LETTER && input.length > 1) {
        alert('Sua busca deve conter somente 1 (um) caracter');
      } else if (searchRadio === FIRST_LETTER) {
        props.foodRecipesByLetter(input);
      }

    } else if (props.mode === 'bebidas') {

      if (searchRadio === 'ingredient') {
        props.drinkRecipesByIngredient(input);
      } else if (searchRadio === 'name') {
        props.drinkRecipesByName(input);
      } else if (searchRadio === FIRST_LETTER && input.length > 1) {
        alert('Sua busca deve conter somente 1 (um) caracter');
      } else if (searchRadio === FIRST_LETTER) {
        props.drinkRecipesByLetter(input);
      }
    }
  }

  return (
    <div>

      <input
        data-testid="search-input"
        type="text"
        onChange={ handleInputChange }
        value={ input }
      />

      <input
        data-testid="ingredient-search-radio"
        type="radio"
        name="search-radio"
        id="ingredient"
        onChange={ handleSearchRadio }
        value="ingredient"
        checked={ searchRadio === 'ingredient' }
      />
      Ingrediente

      <input
        data-testid="name-search-radio"
        type="radio"
        name="search-radio"
        id="name"
        onChange={ handleSearchRadio }
        value="name"
        checked={ searchRadio === 'name' }
      />
      Nome

      <input
        data-testid="first-letter-search-radio"
        type="radio"
        name="search-radio"
        id="frist-letter"
        onChange={ handleSearchRadio }
        value="first-letter"
        checked={ searchRadio === 'first-letter' }
      />
      Primeira letra

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleOnClickButton }
      >
        Buscar
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  foodRecipesByIngredient: (input) => dispatch(actions.foodRecipesByIngredient(input)),
  foodRecipesByName: (input) => dispatch(actions.foodRecipesByName(input)),
  foodRecipesByLetter: (input) => dispatch(actions.foodRecipesByLetter(input)),
  drinkRecipesByIngredient: (input) => dispatch(actions.drinkRecipesByIngredient(input)),
  drinkRecipesByName: (input) => dispatch(actions.drinkRecipesByName(input)),
  drinkRecipesByLetter: (input) => dispatch(actions.drinkRecipesByLetter(input)),
});

SearchBar.propTypes = ({
  foodRecipesByIngredient: PropTypes.func.isRequired,
  foodRecipesByName: PropTypes.func.isRequired,
  foodRecipesByLetter: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(SearchBar);
