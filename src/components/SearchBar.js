import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../redux/slices/fetchReceitas';
import redirectOneRecipe from '../helpers/redirectOneRecipe';

function SearchBar() {
  const { data } = useSelector((state) => state.fetchReceitas);
  const dispatch = useDispatch();
  const [selectedRadio, setSelectedRadio] = useState();
  const [searchInput, setSearchInput] = useState();
  const [redirectURL, setRedirectURL] = useState('');

  function handleSearchInput({ target: { value } }) {
    setSearchInput(value);
  }

  useEffect(() => {
    redirectOneRecipe(data, setRedirectURL);
    if (Object.values(data)[0] === null) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }, [data]);

  function handleRequest() {
    if (selectedRadio === 'firstLetter' && searchInput.length > 1) {
      return alert('Sua busca deve conter somente 1 (um) caracter');
    }
    let recipeType = 'foods';
    const { pathname } = window.location;
    const recipeURL = pathname.split('/')[1];
    if (recipeURL === 'bebidas') {
      recipeType = 'drinks';
    }
    dispatch(getRecipes(recipeType));
  }

  if (redirectURL !== '') return (<Redirect to={ redirectURL } />);

  return (
    <form>
      <label htmlFor="search-bar">
        <input
          name="search-bar"
          data-testid="search-input"
          //  value={ searchInput } Componente esta sendo alterado de não controlado para controlado.
          onChange={ handleSearchInput }
        />
      </label>
      <label htmlFor="radio-search">
        <input
          onChange={ () => setSelectedRadio('ingredients') }
          type="radio"
          name="radio"
          data-testid="ingredient-search-radio"
        />
        Ingredientes
        <input
          onChange={ () => setSelectedRadio('name') }
          type="radio"
          name="radio"
          data-testid="name-search-radio"
        />
        Nome
        <input
          onChange={ () => setSelectedRadio('firstLetter') }
          type="radio"
          name="radio"
          data-testid="first-letter-search-radio"
        />
        Primeira letra
      </label>
      <button
        type="button"
        onClick={ handleRequest }
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
