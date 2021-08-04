import React, { useState, useContext } from 'react';
import { bool, string } from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import MyContext from '../Context/MyContext';
import { fetchIngredient, fetchName, fetchFirstLetter } from '../Services/FetchApi';

export default function Header({ title, searchIconAppears = false }) {
  const { setRecipe, recipe } = useContext(MyContext);
  const [searchResult, setSearchResult] = useState('');
  const [selectedSearch, setSelectedSearch] = useState('');
  const history = useHistory();

  const [searchInput, setSearchInput] = useState(false);

  function toggleInput() {
    if (!searchInput) {
      setSearchInput(true);
    } else {
      setSearchInput(false);
    }
  }

  const getRecipe = () => {
    const { pathname } = history.location;
    const site = pathname === '/comidas' ? 'meal' : 'cocktail';

    switch (selectedSearch) {
    case 'ingredient':
      return fetchIngredient(site, searchResult);
    case 'name':
      return fetchName(site, searchResult);
    case 'firstLetter':
      if (searchResult.length === 1) {
        return fetchFirstLetter(site, searchResult);
      }
      alert('Sua busca deve conter somente 1 (um) caracter');
      return { meals: [], drinks: [] };
    default:
      return { meals: [], drinks: [] };
    }
  };

  const getSearch = async () => {
    const recipe = await getRecipe();
    setRecipe(recipe);
  };

  return (
    <div>
      <header>
        <Link to="/perfil">
          <button
            type="button"
          >
            <img
              data-testid="profile-top-btn"
              src={ profileIcon }
              alt="Icone de perfil"
            />
          </button>
        </Link>
        <h1 data-testid="page-title">{title}</h1>
        {searchIconAppears && (
          <button
            type="button"
            onClick={ toggleInput }
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Barra de pesquisa"
            />
          </button>
        )}
      </header>
      {searchInput && (
        <form>
          <input
            data-testid="search-input"
            placeholder="Buscar Receita"
            onChange={ ({ target }) => setSearchResult(target.value) }
          />
          <label htmlFor="ingredient-search-radio">
            Ingrediente:
            <input
              data-testid="ingredient-search-radio"
              id="ingredient-search-radio"
              name="search-radio"
              type="radio"
              value="ingredient"
              onChange={ ({ target }) => setSelectedSearch(target.value) }
            />
          </label>
          <label htmlFor="name-search-radio">
            Nome:
            <input
              data-testid="name-search-radio"
              id="name-search-radio"
              name="search-radio"
              type="radio"
              value="name"
              onChange={ ({ target }) => setSelectedSearch(target.value) }
            />
          </label>
          <label htmlFor="first-letter-search-radio">
            Primeira Letra:
            <input
              data-testid="first-letter-search-radio"
              id="first-letter-search-radio"
              name="search-radio"
              type="radio"
              value="firstLetter"
              onChange={ ({ target }) => setSelectedSearch(target.value) }
            />
          </label>
          <button
            type="button"
            data-testid="exec-search-btn"
            onClick={ getSearch }
          >
            Buscar
          </button>
        </form>
      )}
    </div>
  );
}

Header.propTypes = {
  title: string,
  searchIconAppears: bool,
}.isRequired;
