import React, { useState, useContext } from 'react';
import Context from '../../Context_Configs/Context';

function SearchBar() {
  const [searchParameters, setSearchParameters] = useState({
    searchInput: '',
    searchMethod: '',
  });

  const { setRequestParams } = useContext(Context);

  return (
    <div>
      <label htmlFor="search-input">
        <input
          onChange={ (e) => setSearchParameters({ ...searchParameters, searchInput: e.target.value }) }
          id="search-input"
          data-testid="search-input"
          type="text"
          placeholder="Busca Receita"
        />
      </label>
      <form>
        <label htmlFor="ingredients">
          Ingredientes
          <input
            onChange={ (e) => setSearchParameters({ ...searchParameters, searchMethod: e.target.id }) }
            data-testid="ingredient-search-radio"
            name="parameter"
            id="ingredients"
            type="radio"
          />
        </label>
        <label htmlFor="name">
          Nome
          <input
            onChange={ (e) => setSearchParameters({ ...searchParameters, searchMethod: e.target.id }) }
            data-testid="name-search-radio"
            name="parameter"
            id="name"
            type="radio"
          />
        </label>
        <label htmlFor="first-letter">
          Primeira Letra
          <input
            onChange={ (e) => setSearchParameters({ ...searchParameters, searchMethod: e.target.id }) }
            data-testid="first-letter-search-radio"
            name="parameter"
            id="first-letter"
            type="radio"
          />
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => setRequestParams(searchParameters) }
        >
          Pesquisar
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
