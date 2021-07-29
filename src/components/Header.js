import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const [showInput, setShowInput] = useState(false);

  const showSearchBar = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/perfil"><img src={ profileIcon } alt="profileIcon" /></Link>
      <h3>Comidas</h3>
      <button
        type="button"
        onClick={ () => showSearchBar() }
      >
        <img src={ searchIcon } alt="searchIcon" />
      </button>
      <input
        type="text"
        name="foodName"
        style={ showInput ? { display: 'inline-block' } : { display: 'none' } }
      />
    </div>
  );
}
