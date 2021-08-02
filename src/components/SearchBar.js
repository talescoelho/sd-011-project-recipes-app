import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { searchBarFetchMeal } from '../services/theMealAPI';
import MainContext from '../context/MainContext';
import { searchBarFetchCockTail } from '../services/theCockTailAPI';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [radio, setRadio] = useState('');
  const { pathname } = useLocation();

  const { data, setData, loading } = useContext(MainContext);

  const history = useHistory();

  useEffect(() => {
    if (data.length === 1) {
      const { idMeal, idDrink } = data[0];
      const id = idMeal || idDrink;
      console.log(idMeal);
      history.push(`${pathname}/${id}`);
    }
    console.log(0);
  }, [pathname, data, history]);

  async function searchButton() {
    if (!loading) {
      if (pathname === '/comidas') {
        const newResults = await searchBarFetchMeal(search, radio) || [];
        console.log(newResults);
        if (typeof (newResults) === 'string') {
          // eslint-disable-next-line no-alert
          alert(newResults);
        } else {
          setData(newResults);
        }
      }
      if (pathname === '/bebidas') {
        const newResults = await searchBarFetchCockTail(search, radio) || [];
        if (typeof (newResults) === 'string') {
          // eslint-disable-next-line no-alert
          alert(newResults);
        } else {
          setData(newResults);
        }
      }
    }
  }

  return (
    <form>
      <label htmlFor="search-input">
        <input
          data-testid="search-input"
          id="search-input"
          onChange={ ({ target: { value } }) => setSearch(value) }
          placeholder="Buscar Receita"
          type="text"
        />
      </label>
      <label htmlFor="ingredient-search-radio">
        Ingrediente
        <input
          data-testid="ingredient-search-radio"
          id="ingredient-search-radio"
          name="search-radio"
          onClick={ ({ target: { value } }) => setRadio(value) }
          type="radio"
          value="ingredient"
        />
      </label>
      <label htmlFor="name-search-radio">
        Nome
        <input
          data-testid="name-search-radio"
          id="name-search-radio"
          name="search-radio"
          onClick={ ({ target: { value } }) => setRadio(value) }
          type="radio"
          value="name"
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        Primeira letra
        <input
          data-testid="first-letter-search-radio"
          id="first-letter-search-radio"
          name="search-radio"
          onClick={ ({ target: { value } }) => setRadio(value) }
          type="radio"
          value="firstLetter"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ searchButton }
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
