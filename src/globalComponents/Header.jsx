import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Picture1 from '../images/profileIcon.svg';
import Picture2 from '../images/searchIcon.svg';
import { fetchApi } from '../redux/actions';

function Header({ title, glass, match: { url } }) {
  const [modal, setModal] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [radioValue, setRadioValue] = React.useState('');
  const dispatch = useDispatch();

  function handleClick() {
    const checkLocation = url === '/comidas' ? 'themealdb' : 'thecocktaildb';
    if (radioValue === 'ingrediente') {
      const ingredientURL = `https://www.${checkLocation}.com/api/json/v1/1/filter.php?i=${inputValue}`;
      dispatch(fetchApi(ingredientURL));
    }
    if (radioValue === 'nome') {
      const nomeURL = `https://www.${checkLocation}.com/api/json/v1/1/search.php?s=${inputValue}`;
      dispatch(fetchApi(nomeURL));
    }
    if (radioValue === 'primeiraLetra') {
      const firstLetterURL = `https://www.${checkLocation}.com/api/json/v1/1/search.php?f=${inputValue}`;
      dispatch(fetchApi(firstLetterURL));
    }
    if (radioValue === 'primeiraLetra' && inputValue.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }

  return (
    <>
      <header className="header" src="profileIcon">
        <Link to="/perfil">
          <img src={ Picture1 } alt="perfil" data-testid="profile-top-btn" />
        </Link>
        <h1 data-testid="page-title">{ title }</h1>

        {glass
      && (
        <button
          data-testid="search-top-btn"
          type="button"
          src="searchIcon"
          onClick={ () => setModal(!modal) }
        >
          <img src={ Picture2 } alt="lupa" />
        </button>)}
      </header>
      {modal && (
        <>
          <label htmlFor="inputText">
            <input
              id="inputText"
              type="text"
              onChange={ ({ target }) => setInputValue(target.value) }
              data-testid="search-input"
              placeholder="Buscar Receita"
            />
          </label>
          <label htmlFor="ingredient">
            <input
              value="ingrediente"
              name="radio"
              type="radio"
              data-testid="ingredient-search-radio"
              id="ingredient"
              onChange={ ({ target }) => setRadioValue(target.value) }
            />
            Ingrediente
          </label>
          <label htmlFor="name">
            <input
              value="nome"
              name="radio"
              type="radio"
              data-testid="name-search-radio"
              id="name"
              onChange={ ({ target }) => setRadioValue(target.value) }
            />
            Nome
          </label>
          <label htmlFor="firstLetter">
            <input
              value="primeiraLetra"
              name="radio"
              type="radio"
              data-testid="first-letter-search-radio"
              id="firstLetter"
              onChange={ ({ target }) => setRadioValue(target.value) }
            />
            Primeira letra
          </label>
          <button
            type="button"
            data-testid="exec-search-btn"
            onClick={ handleClick }
          >
            Buscar
          </button>
        </>
      )}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  glass: PropTypes.bool.isRequired,
};

export default Header;
