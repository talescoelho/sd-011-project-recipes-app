import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

function SearchBar(props){

  const [searchRadio, setSearchRadio] = useState(null);
  const [input, setInput] = useState('');

  function handleInputChange({ target: { value }}) {
    setInput(value)
  }

  function handleSearchRadio({target: { value }}) {
    setSearchRadio(value)
  }

  function handleOnClickButton() {
    // const { recipesByIngredient } = props;
    if(searchRadio === 'ingredient') {
      props.recipesByIngredient(input);
    } else if (searchRadio === 'name') {
      console.log(`vai chamar action name com o input ${input}`);
    } else if (searchRadio === 'first-letter') {
      console.log(`vai chamar action first letter com o input ${input}`);
    }
  }


  return (
    <div>

      <input
        data-testid="search-input"
        type="text"
        onChange={ handleInputChange }
        value = {input}
      />

      <input
        data-testid="ingredient-search-radio"
        type="radio"
        name="search-radio"
        id="ingredient"
        onChange={ handleSearchRadio }
        value="ingredient"
        checked={searchRadio === 'ingredient'}
      />
      Ingrediente

      <input
        data-testid="name-search-radio"
        type="radio"
        name="search-radio"
        id="name"
        onChange={ handleSearchRadio }
        value="name"
        checked={searchRadio === 'name'}
      />
      Nome

      <input
        data-testid="first-letter-search-radio"
        type="radio"
        name="search-radio"
        id="frist-letter"
        onChange={ handleSearchRadio }
        value="first-letter"
        checked={searchRadio === "first-letter"}
      />
      Primeira letra

      <button 
        type="button" 
        data-testid="exec-search-btn"
        onClick={handleOnClickButton}
      >
        Buscar
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  recipesByIngredient: (input) => dispatch(actions.recipesByIngredient(input))
});

export default connect (null, mapDispatchToProps)(SearchBar);
