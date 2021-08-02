import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../Context_Configs/Context';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './Components/SearchBar';

function Drinks() {
  const history = useHistory();
  const { dataDrinks } = useContext(Context);
  const [showSearch, setShowSearch] = useState(false);
  const drinks = 'drinks';
  // console.log(dataDrinks);
  if (dataDrinks !== null && dataDrinks.length === 1) {
    const oneResult = dataDrinks[0];
    history.push(`/bebidas/${oneResult.idDrink}`);
  }

  return (
    <div>
      <h1 data-testid="page-title">Bebidas</h1>
      { showSearch && <SearchBar value={ drinks } /> }
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
        {/* necessidade de componentizar os itens abaixo */}
        { dataDrinks !== null ? dataDrinks
          .map(({ strDrink, strDrinkThumb, idDrink }, index) => (
            <div data-testid={ `${index}-recipe-card` } key={ idDrink }>
              <h3 data-testid={ `${index}-card-name` }>{ strDrink }</h3>
              <img
                src={ strDrinkThumb }
                data-testid={ `${index}-card-img` }
                alt="Imagem de bebida"
              />
            </div>
          // eslint-disable-next-line no-alert
          )) : alert('Sinto muito, não encontramos nenhuma receita para esses filtros.') }
      </div>
    </div>
  );
}

export default Drinks;

Drinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
