import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  const [isVisibleBar, setVisibleBar] = useState(false);
  // const history = useHistory()
  // history.push('/perfil')

  return (
    <header style={ { display: 'flex' } }>
      <button
        // style={ { display: 'none' } }
        data-testid="profile-top-btn"
        type="button"
        onClick={ () => console.log('teste') }
      >
        <img
          src={ profileIcon }
          alt="profile icon"
        />
      </button>
      <h3 data-testid="page-title">Receitas</h3>
      <button
        data-testid="search-top-btn"
        type="button"
        onClick={ () => setVisibleBar(!isVisibleBar) }
      >
        <img
          alt="search button"
          src={ searchIcon }
        />
      </button>
      { isVisibleBar && <div>SearchBar</div> }
      {/* style={ { position: 'fixed', height: '200vh' } } */}
    </header>
  );
}
