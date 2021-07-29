import React, { useState } from 'react';
import Profile from '../images/profileIcon.svg';
import Search from '../images/searchIcon.svg';
import { Nav, Input } from './styles';

export default function Header() {
  const [hide, setHide] = useState(false);
  const [name, setName] = useState('');
  const handleChange = ({ target }) => {
    setName(target.value);
  };
  const handleClick = () => {
    setHide((prevState) =>  !prevState);
  };
  console.log(hide);
  console.log(name);
  return (
    <Nav>
      <a href="/perfil">
        <img data-testids="profile-top-btn" src={ Profile } alt="user" />
      </a>
      <h1 data-testids="page-title">Cool title</h1>
      <img
        onClick={ handleClick }
        data-testids="search-top-btn"
        src={ Search } alt="search"
      />
      <Input
        onChange={ handleChange }
        className={ `${hide ? null : 'hide'}` }
        type="text"
      />
    </Nav>
  );
}
