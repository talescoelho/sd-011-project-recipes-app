import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ShareBtnFav from '../components/ShareBtnFav';
import Favorite from '../components/Favorite';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function RecipeFavorite() {
  const [copyMessage, setCopyMessage] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [filterFavorite, setFilterFavorite] = useState(false);
  const [data, setData] = useState([]);
  const handleClick = () => {
    setCopyMessage(true);
  };
  const setTypeFavorite = ({ target }) => {
    const { value } = target;
    setTypeFilter(value);
    setFilterFavorite(true);
  };

  const allFavorites = () => {
    setFilterFavorite(false);
  };
  React.useEffect(() => {
    if (localStorage.favoriteRecipes) {
      const favorites = JSON.parse(localStorage.favoriteRecipes);
      setData([...favorites]);
    }
  }, []);

  const removeFavorite = (id) => {
    const favorites = JSON.parse(localStorage.favoriteRecipes);
    const newFavorites = favorites.filter((index) => index.id !== id);
    setData([...newFavorites]);

    localStorage.favoriteRecipes = JSON.stringify(newFavorites);
  };

  const getFavoriteLocalStorage = () => {
    if (data.length) {
      return data.map((item, index) => (
        <div key={ index }>
          <span
            data-testid={ `${index}-horizontal-top-text` }
          >
            { item.type === 'bebida'
              ? `${item.alcoholicOrNot}` : `${item.area} - ${item.category}`}
          </span>
          <Link to={ `/${item.type}s/${item.id}` }>
            <h2 data-testid={ `${index}-horizontal-name` }>
              {' '}
              {item.name}
            </h2>
          </Link>

          <Link to={ `/${item.type}s/${item.id}` }>

            <img
              src={ item.image }
              alt={ item.name }
              style={ { width: ' 30%', height: '50%' } }
              data-testid={ `${index}-horizontal-image` }
            />
          </Link>
          <Link to="/receitas-favoritas">
            <button type="button" onClick={ () => removeFavorite(item.id) }>
              <img
                src={ blackHeartIcon }
                data-testid={ `${index}-horizontal-favorite-btn` }
                alt="favorite icon"
              />
            </button>
          </Link>
          <div>
            <button onClick={ handleClick } type="button">

              {ShareBtnFav(`${item.type}s/${item.id}`, index)}
            </button>
          </div>
          {copyMessage && <p>Link copiado!</p>}
        </div>));
    }
  };

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ allFavorites }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        value="comida"
        onClick={ setTypeFavorite }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        value="bebida"
        onClick={ setTypeFavorite }
      >
        Drinks
      </button>
      <div>
        {filterFavorite ? Favorite(typeFilter) : getFavoriteLocalStorage()}
      </div>

    </div>
  );
}
