import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../Context_Configs/Context';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './Components/SearchBar';
import FooterBar from './Components/FooterBar';
import {CategoryFoodAPI ,CategoryFoodFilter} from '../services/CategoryFoodAPI';


// import PropTypes from 'prop-types';

function Foods() {
  const history = useHistory();
  const { dataFood, setRequestFoodParams } = useContext(Context);
  const [showSearch, setShowSearch] = useState(false);
  const [foodCategories, setFoodCategories] = useState();
  const [foodFilter, setFoodFilter] = useState([]);
  const foods = 'foods';
  const numberFour = 4;
  // Busca por comidas ao renderizar a tela de comidas.

  useEffect(() => {
    async function fetchFoodParams() {
      const CategoryFood = await CategoryFoodAPI();
      setFoodCategories(CategoryFood);
    }
    fetchFoodParams();
  }, []);


  useEffect(() => {
    setRequestFoodParams({
      searchInput: '', searchMethod: '' });
  }, []);

  if (dataFood !== null && dataFood.length === 1) {
    const oneResult = dataFood[0];
    history.push(`/comidas/${oneResult.idMeal}`);
  }

  function requestFoodCategories({target}){
    const {value} = target;
    const meals = CategoryFoodFilter(value)
  meals && setFoodFilter(meals.filter((item , index) => index <= 11))
  console.log(foodFilter)
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
        {foodCategories
          ? foodCategories.filter((item, index) => index <= numberFour)
            .map((category, index) => (
              <button
                onClick={(e) => requestFoodCategories(e)}
                type="button"
                key={ index }
                data-testid={ `${category}-category-filter` }
                name="category"
                value={category}
              >
                {category}
              </button>
            ))
          : 'carregando' }
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
