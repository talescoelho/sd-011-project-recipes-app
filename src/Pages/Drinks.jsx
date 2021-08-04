import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../Context_Configs/Context';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './Components/SearchBar';
import FooterBar from './Components/FooterBar';
import CategoryDrinksAPI from '../services/CategoryDrinksAPI';

// import PropTypes from 'prop-types';

function Drinks() {
  const history = useHistory();
  const { dataDrinks, setRequestDrinksParams } = useContext(Context);
  const [showSearch, setShowSearch] = useState(false);
  const [drinkCategories, setDrinkCategories] = useState();
  const drinks = 'drinks';
  const numberFour = 4;

  useEffect(() => {
    async function fetchDrinkParams() {
      const categoryDrink = await CategoryDrinksAPI();
      setDrinkCategories(categoryDrink);
    }
    fetchDrinkParams();
  }, []);

  // Busca por bebidas quando monta a tela de bebidas
  useEffect(() => {
    setRequestDrinksParams({ searchInput: '', searchMethod: '' });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {drinkCategories
          ? drinkCategories.filter((item, index) => index <= numberFour)
            .map((category, index) => (
              <button
                type="button"
                key={ index }
                data-testid={ `${category}-category-filter` }
              >
                {category}
              </button>
            ))
          : 'carregando' }
      </div>
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
      <FooterBar />
    </div>
  );
}

export default Drinks;

Drinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
