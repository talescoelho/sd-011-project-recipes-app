import React, { useState } from 'react';
import Profile from '../images/profileIcon.svg';
import Search from '../images/searchIcon.svg';
import { Nav, Input } from './styles';
import { useHistory } from 'react-router';

export default function Header() {
  const [hide, setHide] = useState(false);
  const [name, setName] = useState('');
  const history = useHistory();
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
      <button onClick={ () => history.push('/perfil') }>
        <img data-testids="profile-top-btn" src={ Profile } alt="user" />
      </button>
      <h1 data-testids="page-title">Cool title</h1>
      <button
        onClick={ handleClick }
        data-testids="search-top-btn"
      >
        <img src={Search} alt="user" />
      </button>
      <Input
        onChange={ handleChange }
        className={ `${hide ? null : 'hide'}` }
        type="text"
      />
    </Nav>
  );
}
