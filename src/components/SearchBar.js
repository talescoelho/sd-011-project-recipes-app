import React, { useState, useEffect, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function SearchBar() {
  const [inputIngredient, setinputIngredient] = useState(false);
  const [inputName, setinputName] = useState(false);
  const [inputFirstLetter, setinputFirstLetter] = useState(false);
  const [fetchUrl, setfetchUrl] = useState('');
  const [search, setSearch] = useState('');

  const { setCatalog } = useContext(GlobalContext);

  async function fetchAPI() {
    const response = await fetch(fetchUrl);
    const result = await response.json();
    setCatalog(result);
  }

  function searchFood() {
    if (search.length > 1 && inputFirstLetter) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    fetchAPI();
  }
  useEffect(() => {
    const defaultUrl = 'https://www.themealdb.com/api/json/v1/1/';
    if (inputIngredient) {
      setfetchUrl(`${defaultUrl}filter.php?i=${search}`);
    } if (inputName) {
      setfetchUrl(`${defaultUrl}search.php?s=${search}`);
    }
    if (inputFirstLetter) {
      setfetchUrl(`${defaultUrl}search.php?f=${search}`);
    }
  }, [search, inputFirstLetter, inputName, inputIngredient]);
  return (
    <div>
      <input
        onChange={ (e) => setSearch(e.target.value) }
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
        onClick={ searchFood }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
