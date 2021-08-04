import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import GlobalContext from '../context';

function SearchBarHeader(props) {
  const [option, setOption] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const { getDataFromFoods, getDataFromDrinks } = useContext(GlobalContext);

  const handleOption = ({ target }) => {
    const { value } = target;
    setOption(value);
  };

  const handleSearchInput = ({ target }) => {
    const { value } = target;
    setSearchInput(value);
  };

  const requestApiFoodDrink = () => {
    const endPointIngredientMeals = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
    const endPointNameMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const endPointFirstLetterMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

    const endPointIngredientDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
    const endPointNameDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const endPointFirstLetterDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

    const firstLetter = 'primeira-letra';

    const { history: { location: { pathname } } } = props;

    if (pathname === '/comidas') {
      if (option === 'ingrediente') {
        getDataFromFoods(endPointIngredientMeals, searchInput);
      } else if (option === 'nome') {
        getDataFromFoods(endPointNameMeals, searchInput);
      } else if (option === firstLetter && searchInput.length > 1) {
        alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        getDataFromFoods(endPointFirstLetterMeals, searchInput);
      }
    } else if (pathname === '/bebidas') {
      if (option === 'ingrediente') {
        getDataFromDrinks(endPointIngredientDrinks, searchInput);
      } else if (option === 'nome') {
        getDataFromDrinks(endPointNameDrinks, searchInput);
      } else if (option === firstLetter && searchInput.length > 1) {
        alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        getDataFromDrinks(endPointFirstLetterDrinks, searchInput);
      }
    }

    setOption('');
    setSearchInput('');
  };

  const requestApi = () => {
    requestApiFoodDrink();
  };

  function renderForm() {
    return (
      <form>
        <label htmlFor="search-input">
          <input
            id="search-input"
            type="text"
            value={ searchInput }
            onChange={ handleSearchInput }
            placeholder="Buscar Receita"
            data-testid="search-input"
          />
        </label>

        <label htmlFor="ingredient">
          <input
            id="ingredient"
            type="radio"
            value="ingrediente"
            checked={ option === 'ingrediente' }
            onChange={ handleOption }
            data-testid="ingredient-search-radio"
          />
          Ingrediente
        </label>

        <label htmlFor="name">
          <input
            id="name"
            type="radio"
            value="nome"
            checked={ option === 'nome' }
            onChange={ handleOption }
            data-testid="name-search-radio"
          />
          Nome
        </label>

        <label htmlFor="first-letter">
          <input
            id="first-letter"
            type="radio"
            value="primeira-letra"
            checked={ option === 'primeira-letra' }
            onChange={ handleOption }
            data-testid="first-letter-search-radio"
          />
          Primeira letra
        </label>

        <button
          type="button"
          onClick={ requestApi }
          data-testid="exec-search-btn"
        >
          Buscar
        </button>
      </form>);
  }

  return (
    renderForm()
  );
}

export default withRouter(SearchBarHeader);
