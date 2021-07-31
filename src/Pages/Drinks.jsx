import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context_Configs/Context';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './Components/SearchBar';
// import PropTypes from 'prop-types';

function Drinks({ history }) {
  const { dataDrinks } = useContext(Context);
  const [showSearch, setShowSearch] = useState(false);
  const drinks = 'drinks';
  // console.log(dataDrinks);
  if (dataDrinks.length === 1) {
    const oneResult = dataDrinks[0];
    history.push(`/bebidas/${oneResult.idDrink}`);
  }

  return (
    <div>
      <h1 data-testid="page-title">Bebidas</h1>
      { showSearch ? <SearchBar value={ drinks } /> : <p>Desapareceu</p> }
      <Link to="/perfil">
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Botão que direciona para a tela de perfil"
        />
      </Link>
      <button
        onClick={ () => setShowSearch(!showSearch) }
        type="button"
      >
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="Botão com imagem de uma lupa: abre uma barra de pesquisa"
        />
      </button>
      <div>
      { dataDrinks !== null ? dataDrinks.map(({ strDrink }) => <p>{ strDrink }</p>) : 'coisado'}
      </div>
    </div>
  );
}

export default Drinks;
