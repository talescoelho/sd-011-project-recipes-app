import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../../context/RecipesContext';
import '../../styles/SearchBar.css';

function SearchBar() {
  const { setSearchText,
    setRadioButton, handleClick } = useContext(RecipesContext);

  const history = useHistory();
  const { location: { pathname } } = history;

  return (
    <section className="search-bar">
      <form>
        <label htmlFor="search-input">
          <input
            id="search-input"
            data-testid="search-input"
            type="text"
            name="searchText"
            onChange={ ({ target: { value } }) => setSearchText(value) }
          />
        </label>
        <label htmlFor="ingredient-radio">
          <input
            id="ingredient-radio"
            data-testid="ingredient-search-radio"
            type="radio"
            value="ingrediente"
            name="searchType"
            onChange={ ({ target: { value } }) => setRadioButton(value) }
          />
          Ingredientes
        </label>
        <label htmlFor="name-radio">
          <input
            id="name-radio"
            data-testid="name-search-radio"
            type="radio"
            value="nome"
            name="searchType"
            onChange={ ({ target: { value } }) => setRadioButton(value) }
          />
          Nome
        </label>
        <label htmlFor="first-letter-radio">
          <input
            id="first-letter-radio"
            data-testid="first-letter-search-radio"
            type="radio"
            value="primeira letra"
            name="searchType"
            onChange={ ({ target: { value } }) => setRadioButton(value) }
          />
          Primeira letra
        </label>
        <section>
          <button
            data-testid="exec-search-btn"
            type="button"
            onClick={ () => { handleClick(pathname); } }
          >
            Buscar
          </button>
        </section>
      </form>
    </section>
  );
}

export default SearchBar;
