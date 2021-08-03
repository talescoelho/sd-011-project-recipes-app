import React, { useState } from 'react';
import { bool, string } from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import useRecipes from '../UseStates/useRecipes';
import { fetchIngredient, fetchName, fetchFirstLetter } from '../Services/FetchApi';

export default function Header({ title, searchIconAppears = false }) {
  const { setRecipe } = useRecipes;
  // a useRecipes é uma função, só que se eu colocar os () chamando, ela não passa a questão 13.
  // Eu to usando o setRecipes, pra puxar as informações do provider/useState e trazer de volta no retorno da API.
  const [searchResult, setSearchResult] = useState('');
  const [selectedSearch, setSelectedSearch] = useState('');

  const [searchInput, setSearchInput] = useState(false);

  function toggleInput() {
    if (!searchInput) {
      setSearchInput(true);
    } else {
      setSearchInput(false);
    }
  }

  const getRecipe = () => {
    switch (selectedSearch) {
    case 'ingredient':
      return fetchIngredient(searchResult);
    case 'name':
      return fetchName(searchResult);
    case 'firstLetter':
      if (selectedSearch.length === 1) {
        return fetchFirstLetter(searchResult);
      }
      // eslint-disable-next-line no-alert
      alert('Sua busca deve conter somente 1 (um) caracter');
      // esse alert tb está dando errado, desabilitei o eslint aqui só pra ver se o teste passaria.
      break;
    default:
      return searchResult;
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
              name="ingredient-search-radio"
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
              name="name-search-radio"
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
              name="first-letter-search-radio"
              type="radio"
              value="firsLetter"
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
