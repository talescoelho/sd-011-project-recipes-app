import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../Context_Configs/Context';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './Components/SearchBar';
import FooterBar from './Components/FooterBar';
// import PropTypes from 'prop-types';

function Foods() {
  const history = useHistory();
  const { dataFood } = useContext(Context);
  const [showSearch, setShowSearch] = useState(false);
  const foods = 'foods';

  if (dataFood !== null && dataFood.length === 1) {
    const oneResult = dataFood[0];
    history.push(`/comidas/${oneResult.idMeal}`);
  }

  return (
    <>
      <div>
        <h1 data-testid="page-title">Comidas</h1>
        { showSearch && <SearchBar value={ foods } /> }
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
      </div>
      <div>
        {/* necessidade de componentizar os itens abaixo */}
        { dataFood !== null ? dataFood.map(({ strMeal, strMealThumb, idMeal }, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ idMeal }>
            <h3 data-testid={ `${index}-card-name` }>{strMeal}</h3>
            <img
              src={ strMealThumb }
              data-testid={ `${index}-card-img` }
              alt="Imagem de comida"
            />
          </div>
        // eslint-disable-next-line no-alert
        )) : alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
      </div>
      <FooterBar />
    </>
  );
}

export default Foods;

Foods.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
