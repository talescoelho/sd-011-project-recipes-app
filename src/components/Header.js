import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import Profile from '../images/profileIcon.svg';
import Search from '../images/searchIcon.svg';
import RecipesContext from '../context/RecipesContext';
import SearchBar from './SearchBar';
import { Nav, Input } from './styles';

export default function Header() {
  const { recipeType } = useContext(RecipesContext);
  const [hide, setHide] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    setHide((prevState) => !prevState);
  };
  return (
    <>
      <Nav>
        <button type="button" onClick={ () => history.push('/perfil') }>
          <img data-testids="profile-top-btn" src={ Profile } alt="user" />
        </button>
        { recipeType === 'meals'
          ? <h1 data-testids="page-title">Comidas</h1>
          : <h1 data-testids="page-title">Bebidas</h1>}
        <button
          type="button"
          onClick={ handleClick }
          data-testids="search-top-btn"
        >
          <img src={ Search } alt="user" />
        </button>
      </Nav>
      { hide
       && <SearchBar />}
    </>
  );
}
