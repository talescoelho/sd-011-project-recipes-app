import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Profile from '../images/profileIcon.svg';
import Search from '../images/searchIcon.svg';
import { Nav, Input } from './styles';

export default function Header() {
  const [hide, setHide] = useState(false);
  const [name, setName] = useState('');
  const history = useHistory();
  const handleChange = ({ target }) => {
    setName(target.value);
  };
  const handleClick = () => {
    setHide((prevState) => !prevState);
  };
  console.log(hide);
  console.log(name);
  return (
    <Nav>
      <button type="button" onClick={ () => history.push('/perfil') }>
        <img data-testids="profile-top-btn" src={ Profile } alt="user" />
      </button>
      <h1 data-testids="page-title">Cool title</h1>
      <button
        type="button"
        onClick={ handleClick }
        data-testids="search-top-btn"
      >
        <img src={ Search } alt="user" />
      </button>
      <Input
        onChange={ handleChange }
        className={ `${hide ? null : 'hide'}` }
        type="text"
      />
    </Nav>
  );
}
