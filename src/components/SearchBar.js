import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function SearchBar() {
  const { inputValue, setInputValue, filterSearchHeader } = useContext(AppContext);

  return (
    <div>
      <input
        value={ inputValue.searchInput }
        onChange={ (e) => setInputValue({ ...inputValue, searchInput: e.target.value }) }
        data-testid="search-input"
        type="text"
        name="foodName"

      />
      <div>
        <form>
          <label htmlFor="ingrediente-radio">
            Ingrediente
            <input
              name="search-ratio"
              type="radio"
              data-testid="ingredient-search-radio"
              id="ingrediente-radio"
              value="ingrediente"
              onChange={ (e) => setInputValue({ ...inputValue,
                radioInput: e.target.value }) }
            />
          </label>

          <label htmlFor="nome-radio">
            Nome
            <input
              name="search-ratio"
              type="radio"
              data-testid="name-search-radio"
              id="nome-radio"
              value="nome"
              onChange={ (e) => setInputValue({ ...inputValue,
                radioInput: e.target.value }) }
            />
          </label>

          <label htmlFor="first-letter-radio">
            Primeira letra
            <input
              name="search-ratio"
              type="radio"
              data-testid="first-letter-search-radio"
              id="first-letter-radio"
              value="first-letter"
              onChange={ (e) => setInputValue({ ...inputValue,
                radioInput: e.target.value }) }
            />
            <button
              type="button"
              data-testid="exec-search-btn"
              onClick={ () => filterSearchHeader() }
            >
              Pesquisar
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
