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
      <img
        data-testid="profile-top-btn"
        type="button"
        alt=""
        src={ profileIcon }
        onClick={ () => console.log('teste') }
      />
      <h3 data-testid="page-title">Receitas</h3>
      <img
        data-testid="search-top-btn"
        type="button"
        alt="button"
        src={ searchIcon }
        onClick={ () => setVisibleBar(!isVisibleBar) }
      />
      { isVisibleBar && <div>SearchBar</div> }
      {/* style={ { position: 'fixed', height: '200vh' } } */}
    </header>
  );
}
