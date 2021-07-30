import React, { useState } from 'react';

function SearchBar() {
  const [inputIngredient, setinputIngredient] = useState(false);
  const [inputName, setinputName] = useState(false);
  const [inputFirstLetter, setinputFirstLetter] = useState(false);
  return (
    <div>
      <input
        data-testid="search-input"
        className="search-bar"
        type="search"
        placeholder="Pesquisar..."
      />
      <div>
        <label htmlFor="ingredient">
          Ingrediente
          <input
            onChange={ () => {
              setinputFirstLetter(false);
              setinputName(false);
              setinputIngredient(!inputIngredient);
            } }
            name="inputRadio"
            type="radio"
            data-testid="ingredient-search-radio"
            id="ingredient"
          />
        </label>
        <label htmlFor="name">
          Nome
          <input
            onChange={ () => {
              setinputIngredient(false);
              setinputFirstLetter(false);
              setinputName(!inputName);
            } }
            name="inputRadio"
            type="radio"
            id="name"
            data-testid="name-search-radio"
          />
        </label>
        <label htmlFor="first-letter">
          Primeira Letra
          <input
            onChange={ () => {
              setinputName(false);
              setinputIngredient(false);
              setinputFirstLetter(!inputFirstLetter);
            } }
            name="inputRadio"
            type="radio"
            id="first-letter"
            data-testid="first-letter-search-radio"
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onChange="oi"
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
